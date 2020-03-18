const jwt = require('jsonwebtoken');
const config = require('../config/keys');

// Checks if request includes a JWT token,
// if it does, decode the token and pass the user id to the req.user object
module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if no token
  if (!token)
    return res.status(401).json({message: 'No token, authorization denied'});

  // Varify token
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();

  } catch (err) {
    res.status(401).json({msg: 'token is not valid'});
  }
};