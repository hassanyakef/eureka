import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
} from './profileConstants';
import { toastr } from 'react-redux-toastr';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart
} from '../auth/authActions';
import { GET_USER_IDEAS } from '../idea/ideaConstants';

// Get current user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch({
      type: GET_USER_IDEAS,
      payload: res.data.ideas
    });
    dispatch(asyncActionFinish());

  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    dispatch(asyncActionError());
  }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    dispatch(asyncActionStart());
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    dispatch(asyncActionError());
  }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    dispatch(asyncActionStart());
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch({
      type: GET_USER_IDEAS,
      payload: res.data.ideas
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    dispatch(asyncActionError());
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

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    toastr.success('Success', edit ? 'Profile Updated' : 'Profile Created');

    // history.push(`/users/${res.data._id}`);

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toastr.error('Oops', `Something went wrong ${error.msg}`));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};