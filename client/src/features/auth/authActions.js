import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT, ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR
} from './authConstants';
import setAuthToken from '../../app/common/util/setAuthToken';
import { toastr } from 'react-redux-toastr';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch(asyncActionStart());
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
    dispatch(asyncActionError());
  }
};


// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, password });

  try {
    dispatch(asyncActionStart());
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(asyncActionFinish());
    toastr.success('Success', 'Account has been created');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => toastr.error('Oops', `Something went wrong ${error.msg}`));
      console.log({errors});
    }

    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch(asyncActionError());
  }
};

// Login User
export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    dispatch(asyncActionStart());
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    dispatch(asyncActionFinish());
    toastr.success('Success', 'You are logged in');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => toastr.error('Oops', `Something went wrong ${error.msg}`));
      console.log({ errors});
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(asyncActionError());
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  toastr.success('Success', 'You are logged out');
  console.log('You are logged out');
};

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  }
};

export const asyncActionFinish= () => {
  return {
    type: ASYNC_ACTION_FINISH
  }
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  }
};