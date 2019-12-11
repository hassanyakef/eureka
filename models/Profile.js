const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
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
    facebook: {
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

mongoose.model('profile', ProfileSchema);