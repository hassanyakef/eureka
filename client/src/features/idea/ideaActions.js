import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart
} from '../auth/authActions';
import {
  ADD_COMMENT,
  ADD_IDEA,
  DELETE_IDEA,
  GET_IDEA,
  GET_IDEAS,
  IDEA_ERROR, LIKE_COMMENT,
  LIKE_IDEA, REMOVE_COMMENT, SORT_COMMENT_BY_DATE, SORT_COMMENT_BY_LIKES, UPDATE_IDEA
} from './ideaConstants';
import { getProfileById } from '../user/profileActions';
import {reset} from 'redux-form'
import { GET_PROFILE } from '../user/profileConstants';

// Get ideas
export const getIdeas = () => async dispatch => {
  try {
    const res = await axios.get('/api/ideas');

    dispatch({
      type: GET_IDEAS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Like or unlike an idea
export const likeIdea = id => async dispatch => {
  try {
    const res = await axios.put(`/api/ideas/like/${id}`);

    dispatch({
      type: LIKE_IDEA,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete idea
export const deleteIdea = id => async dispatch => {
  try {
    await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_IDEA,
      payload: id
    });

    toastr.success('Success', 'Idea Removed');

  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add idea
export const addIdea = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/ideas', formData, config);

    dispatch({
      type: ADD_IDEA,
      payload: res.data
    });

    toastr.success('Success', 'Idea Created');

  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update an idea
export const updateIdea = (id, formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/ideas/${id}`, formData, config);

    dispatch({
      type: UPDATE_IDEA,
      payload: res.data
    });
    history.push(`/ideas/${id}`);

    toastr.success('Success', 'Idea Updated');

  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get idea
export const getIdea = id => async dispatch => {
  try {
    const res = await axios.get(`/api/ideas/${id}`);

    dispatch({
      type: GET_IDEA,
      payload: res.data
    });
    const res2 = await axios.get(`/api/profile/user/${res.data.user}`);

    dispatch({
      type: GET_PROFILE,
      payload: res2.data
    });


  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (ideaId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log({formData, ideaId});
    const res = await axios.post(
      `/api/ideas/comment/${ideaId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    toastr.success('Success', 'Idea Commented');
    dispatch(reset('addCommentForm'));

  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Like or unlike a comment
export const likeComment = (id, commentId) => async dispatch => {
  try {
    console.log({id, commentId});
    const res = await axios.put(`/api/ideas/comment/like/${id}/${commentId}`);
    console.log(res.data);

    dispatch({
      type: LIKE_COMMENT,
      payload: { id: commentId, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// sort comments by date
export const sortCommentsByDate = () => dispatch => {
  console.log('sort by date');
  dispatch({
    type: SORT_COMMENT_BY_DATE
  });
};

// Sort comments by Likes
export const sortCommentsByLikes = () => dispatch => {
  console.log('sort by likes');
  dispatch({
    type: SORT_COMMENT_BY_LIKES
  });
};

// Delete comment
export const deleteComment = (ideaId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/ideas/comment/${ideaId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    toastr.success('Success', 'Comment Removed');
  } catch (err) {
    dispatch({
      type: IDEA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};