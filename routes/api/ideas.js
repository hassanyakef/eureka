const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Idea = require('../../models/Idea');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

/**
 * @route POST api/ideas
 * @desc Create an idea
 * @access Private
 */
router.post('/', [auth, [check('body', 'Body is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id);

      const newIdea = new Idea({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        status: req.body.status,
        allowComments: req.body.allowComments,
        authorName: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const idea = await newIdea.save();
      // user.ideas.unshift(newIdea);
      // await user.save();
      return res.json(idea);

    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }

  });

/**
 * @route PUT api/ideas/:id
 * @desc Update an idea
 * @access Private
 */
router.put('/:id', auth,
  async (req, res) => {
    try {
      const idea = await Idea.findById(req.params.id);
      if (!idea) {
        return res.status(404).json({ msg: 'Idea not found' });
      }

      idea.title = req.body.title;
      idea.body = req.body.body;
      idea.category = req.body.category;
      idea.status = req.body.status;
      idea.allowComments = req.body.allowComments;

      const result = await idea.save();
      return res.json(result);

    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }

  });

/**
 * @route GET api/ideas
 * @desc Get all ideas
 * @access Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ date: -1 });
    return res.json(ideas);

  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

/**
 * @route GET api/ideas/:userId
 * @desc Get all ideas from a user
 * @access Private
 */
router.get('/user/:userId', auth, async (req, res) => {
  try {
    const ideas = await Idea.find({user: req.params.userId}).sort({ date: -1 });
    return res.json(ideas);

  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

/**
 * @route GET api/ideas/:id
 * @desc Get a single idea by id
 * @access Private
 */
router.get('/:id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    return res.json(idea);

  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    return res.status(500).send('Server Error');
  }
});

/**
 * @route DELETE api/ideas/:id
 * @desc Delete a single idea by id
 * @access Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }

    // Check user
    if (idea.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await idea.remove();

    return res.json({ msg: 'Idea removed' });

  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    return res.status(500).send('Server Error');
  }
});

/**
 * @route PUT api/ideas/like/:id
 * @desc Like or unlike an idea
 * @access Private
 */
router.put('/like/:id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    // Check if the idea has already been liked
    if (idea.likes.filter(like => like._id.toString() === req.user.id).length > 0) {
      // Get remove idx
      const removeIdx = idea.likes.map(like => like._id.toString()).indexOf(req.user.id);
      idea.likes.splice(removeIdx, 1);
    } else {
      idea.likes.unshift(req.user.id);
    }
    await idea.save();

    res.json(idea.likes);

  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    return res.status(500).send('Server Error');
  }
});

/**
 * @route PUT api/ideas/like/:id
 * @desc Like or unlike a comment
 * @access Private
 */
router.put('/comment/like/:id/:comment_id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }

    // Pull out comment from the idea
    const comment = idea.comments.find(comment => comment.id === req.params.comment_id);

    // Make sure comment exist
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check if the comment has already been liked
    if (comment.likes.filter(like => like._id.toString() === req.user.id).length > 0) {
      // Get remove idx
      const removeIdx = comment.likes.map(like => like._id.toString()).indexOf(req.user.id);
      comment.likes.splice(removeIdx, 1);
    } else {
      comment.likes.unshift(req.user.id);
    }
    await idea.save();

    res.json(comment.likes);

  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    return res.status(500).send('Server Error');
  }
});

/**
 * @route POST api/ideas/comment/:id
 * @desc Comment on a idea
 * @access Private
 */
router.post('/comment/:id', [auth, [check('commentBody', 'Comment body is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const idea = await Idea.findById(req.params.id);
      const newComment = {
        commentBody: req.body.commentBody,
        name: user.name,
        avatar: user.avatar,
        commentUser: req.user.id
      };

      idea.comments.unshift(newComment);

      await idea.save();
      return res.json(idea.comments);

    } catch (err) {
      console.log(err.message);
      return res.status(500).send('Server Error');
    }

  });

/**
 * @route DELETE api/ideas/comment/:id/:comment_id
 * @desc Remove a comment from a idea
 * @access Private
 */
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    // const user = await User.findById(req.user.id).select('-password');
    const idea = await Idea.findById(req.params.id);
    // Pull out comment from the idea
    const comment = idea.comments.find(comment => comment.id === req.params.comment_id);

    // Make sure comment exist
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.commentUser.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIdx = idea.comments.map(comment => comment.commentUser.toString())
      .indexOf(req.user.id);
    idea.comments.splice(removeIdx, 1);

    await idea.save();
    return res.json(idea.comments);

  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }

});
module.exports = router;