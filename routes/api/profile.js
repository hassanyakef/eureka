const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Idea = require('../../models/Idea');

/**
 * @route GET api/profile/me
 * @desc Get current user's profile
 * @access Private
 */
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate({
        path: 'user',
        select: ['name', 'avatar']
      });
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    const ideas = await Idea.find({ user: req.user.id });
    return res.json({profile, ideas});

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

/**
 * @route POST api/profile/
 * @desc Create or update a user profile
 * @access Private
 */
router.post('/', auth, async (req, res) => {

  const {
    website, location, bio, status, githubUsername, interests, twitter, facebook, linkedin, instagram
  } = req.body;

  const profileFields = {};

  profileFields.user = req.user.id;

  if (website) profileFields.company = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubUsername) profileFields.githubUsername = githubUsername;

  if (interests) {
    profileFields.interests = interests.split(',').map(interest => interest.trim());
  }

  profileFields.social = {};

  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // Update profile
      profile =
        await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields },
          { new: true });
      return res.json(profile);
    }

    // Create profile
    profile = new Profile(profileFields);
    await profile.save();
    return res.json(profile);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

/**
 * @route GET api/profile
 * @desc Get all profiles
 * @access Public
 */
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find({}).populate('user', ['name', 'avatar']);
    return res.json(profiles);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

/**
 * @route GET api/profile/user/:user_id
 * @desc Get user's profile
 * @access Public
 */
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id })
      .populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    const ideas = await Idea.find({ user: req.params.user_id });
    return res.json({profile, ideas});
  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    return res.status(500).send('Server Error');
  }
});

/**
 * @route DELETE api/profile
 * @desc Delete profile, user, and post.
 * @access Private
 */
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    await Idea.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    return res.json({ msg: 'User deleted' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;