const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  authorName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'public'
  },
  allowComments: {
    type: Boolean,
    default: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  comments: [
    {
      commentUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      commentBody: {
        type: String,
        required: true
      },
      commentDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Idea = mongoose.model('idea', IdeaSchema);