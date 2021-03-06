const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
    type: String
  },
  profession: {
    type: String
  },
  company: {
    type: String
  },
  interests: {
    type: [String]
  },
  location: {
    type: String
  },
  status: { // developer or regular public
    type: String,
    default: 'public'
  },
  website: {
    type: String
  },
  githubUsername: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);