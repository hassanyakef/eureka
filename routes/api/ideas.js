const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Idea = require('../../models/Idea');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

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
      user.ideas.unshift(newIdea);
      await user.save();
      return res.json(idea);

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
 * @desc Like a idea
 * @access Private
 */
router.put('/like/:id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    // Check if the idea has already been liked
    if (idea.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
      return res.status(400).json({ msg: 'Idea already liked' });
    }
    idea.likes.unshift(req.user.id);
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
 * @route PUT api/ideas/unlike/:id
 * @desc Unlike a idea
 * @access Private
 */
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: 'Idea not found' });
    }
    // Check if the idea has already been liked
    if (idea.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: 'Idea has not yet been liked' });
    }
    // Get remove idx
    const removeIdx = idea.likes.map(like => like.user.toString()).indexOf(req.user.id);
    idea.likes.splice(removeIdx, 1);
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
 * @route POST api/ideas/comment/:id
 * @desc Comment on a idea
 * @access Private
 */
router.post('/comment/:id', [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const idea = await Idea.findById(req.params.id);
      const newComment = {
        commentBody: req.body.text,
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
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIdx = idea.comments.map(comment => comment.user.toString())
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