import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START
} from '../auth/authSlice';
import axios from 'axios';
import { GET_USER_IDEAS } from '../idea/ideaSlice';
import { toastr } from 'react-redux-toastr';
import { CLEAR_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_ERROR } from './profileSlice';

// Get current user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get('/api/profile/me');
    dispatch(GET_PROFILE(res.data.profile));
    dispatch(GET_USER_IDEAS(res.data.ideas));
    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(PROFILE_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch(CLEAR_PROFILE());

  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get('/api/profile');
    dispatch(GET_PROFILES(res.data));
    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(PROFILE_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get(`/api/profile/user/${userId}`);
    dispatch(GET_PROFILE(res.data.profile));
    dispatch(GET_USER_IDEAS(res.data.ideas));
    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(PROFILE_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false,
) => async dispatch => {
  const interests = formData.interests && typeof(formData.interests) !== 'string' ? formData.interests.join(',') : formData.interests;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/profile', {...formData, interests}, config);

    dispatch(GET_PROFILE(res.data));
    toastr.success('Success', edit ? 'Profile Updated' : 'Profile Created');
    // history.push(`/users/${res.data._id}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toastr.error('Oops', `Something went wrong ${error.msg}`));
    }
    dispatch(PROFILE_ERROR({
      msg: err.response.statusText,
      status: err.response.status
    }));
  }
};