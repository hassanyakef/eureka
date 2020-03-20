import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START
} from '../auth/authSlice';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { GET_PROFILE } from '../user/profileSlice';
import { reset } from 'redux-form';
import {
  ADD_COMMENT,
  ADD_IDEA,
  DELETE_IDEA, GET_IDEA,
  GET_IDEAS,
  IDEA_ERROR, LIKE_COMMENT,
  LIKE_IDEA, REMOVE_COMMENT,
  UPDATE_IDEA
} from './ideaSlice';

// Get all public ideas
export const getIdeas = () => async dispatch => {
  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get('/api/ideas');
    dispatch(GET_IDEAS(res.data));
    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Like or unlike an idea
export const likeIdea = (id, isAuthenticated, history) => async dispatch => {
  if(!isAuthenticated) {
    history.push('/login');
    toastr.error('You need to login to like an idea');
    return;
  }
  try {
    const res = await axios.put(`/api/ideas/like/${id}`);
    dispatch(LIKE_IDEA({ id, likes: res.data }));
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};

// Delete idea
export const deleteIdea = id => async dispatch => {
  try {
    await axios.delete(`/api/ideas/${id}`);
    dispatch(DELETE_IDEA(id));
    toastr.success('Success', 'Idea Removed');
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};

// Add idea
export const addIdea = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/ideas', formData, config);
    console.log('Add idea action called');
    console.log(res.data);
    dispatch(ADD_IDEA(res.data));
    console.log('After dispatch add idea');
    history.push(`/ideas/${res.data._id}`);
    toastr.success('Success', 'Idea Created');
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
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
    dispatch(UPDATE_IDEA(res.data));
    history.push(`/ideas/${id}`);
    toastr.success('Success', 'Idea Updated');
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};

// Get idea
export const getIdea = id => async dispatch => {
  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get(`/api/ideas/${id}`);
    dispatch(GET_IDEA(res.data));

    const res2 = await axios.get(`/api/profile/user/${res.data.user}`);
    dispatch(GET_PROFILE(res2.data.profile));

    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
    dispatch(ASYNC_ACTION_ERROR());
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
    const res = await axios.post(
      `/api/ideas/comment/${ideaId}`,
      formData,
      config
    );

    dispatch(ADD_COMMENT(res.data));
    toastr.success('Success', 'Idea Commented');
    dispatch(reset('addCommentForm'));

  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};


// Like or unlike a comment
export const likeComment = (id, commentId, isAuthenticated, history) => async dispatch => {
  if(!isAuthenticated) {
    history.push('/login');
    toastr.error('You need to login to like a comment');
    return;
  }

  try {
    const res = await axios.put(`/api/ideas/comment/like/${id}/${commentId}`);
    dispatch(LIKE_COMMENT({id: commentId, likes: res.data }));
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};

// Delete comment
export const deleteComment = (ideaId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/ideas/comment/${ideaId}/${commentId}`);
    dispatch(REMOVE_COMMENT(commentId));
    toastr.success('Success', 'Comment Removed');
  } catch (err) {
    dispatch(IDEA_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};