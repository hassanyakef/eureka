const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('../../config/keys');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

/**
 * @route GET api/auth
 * @desc Test route
 * @access Public
 */
router.get('/', auth, async(req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


/**
 * @route POST api/auth
 * @desc Login user (authenticate user and return token)
 * @access Public
 */
router.post('/', [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Please enter your password').not().isEmpty(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(req.body);
    return res.status(400).json({errors: errors.array()})
  }

  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
    }

    const payload = {
      user: {
        id: user.id,
      }
    };

    jwt.sign(payload, config.jwtSecret, {expiresIn: 36000}, (err, token) => {
      if (err) throw err;
      res.json({token})
    })

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }

});
module.exports = router;