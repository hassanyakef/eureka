import { createSlice } from '@reduxjs/toolkit';

const ideaSlice = createSlice({
  name: 'idea',
  initialState: {
    ideas: null,
    idea: null,
    error: {},
    sortComment: 'byDate'
  },
  reducers: {
    GET_IDEAS(state, action) {
     state.ideas = action.payload;
    },
    GET_USER_IDEAS(state, action) {
      state.ideas = action.payload;
    },
    GET_IDEA(state, action) {
     state.idea = action.payload;
    },
    ADD_IDEA(state, action) {
      state.ideas.unshift(action.payload);
    },
    UPDATE_IDEA(state, action) {
      const {payload} = action;
      state.ideas = state.ideas.map(idea =>
        idea._id === payload._id ? payload : idea
      )
    },
    DELETE_IDEA(state, action) {
      state.ideas = state.ideas.filter(idea => idea._id !== action.payload)
    },
    IDEA_ERROR(state, action) {
      state.error = action.payload;
    },
    LIKE_IDEA(state, action) {
      const {payload} = action;
      const idea = state.ideas.find(idea => idea._id === payload.id);
      idea.likes = payload.likes;
    },
    ADD_COMMENT(state, action) {
      state.idea.comments = action.payload;
    },
    REMOVE_COMMENT(state, action) {
      state.idea.comments = state.idea.comments.filter(
        comment => comment._id !== action.payload
      )
    },
    LIKE_COMMENT(state, action) {
      const {payload} = action;
      state.idea.comments = state.idea.comments.map(comment =>
        comment._id === payload.id ? { ...comment, likes: payload.likes } : comment)
    },
    SORT_COMMENT_BY_DATE(state) {
      state.idea.comments.sort((a, b) => {
        const commentA = a.commentDate;
        const commentB = b.commentDate;

        let comparison = 0;
        if (commentA < commentB) {
          comparison = 1;
        } else if (commentA > commentB) {
          comparison = -1;
        }
        return comparison;
      });
      state.sortComment = 'byDate';
    },
    SORT_COMMENT_BY_LIKES(state) {
      state.idea.comments.sort((a, b) => {
        const commentA = a.likes.length;
        const commentB = b.likes.length;

        let comparison = 0;
        if (commentA < commentB) {
          comparison = 1;
        } else if (commentA > commentB) {
          comparison = -1;
        }
        return comparison;
      });
      state.sortComment = 'byLikes';
    }
  }
});

// Destructure and export the plain action creators
export const {
  GET_IDEAS,
  GET_USER_IDEAS,
  UPDATE_IDEA,
  DELETE_IDEA,
  LIKE_COMMENT,
  SORT_COMMENT_BY_LIKES,
  SORT_COMMENT_BY_DATE,
  IDEA_ERROR,
  REMOVE_COMMENT,
  ADD_COMMENT,
  ADD_IDEA,
  LIKE_IDEA,
  GET_IDEA
} = ideaSlice.actions;

export default ideaSlice.reducer;