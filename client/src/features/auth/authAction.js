import setAuthToken from '../../app/common/util/setAuthToken';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
  AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS,
  USER_LOADED
} from './authSlice';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.get('/api/auth');
    dispatch(USER_LOADED(res.data));
    dispatch(ASYNC_ACTION_FINISH());
  } catch (err) {
    dispatch(AUTH_ERROR());
    dispatch(ASYNC_ACTION_ERROR());
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
    dispatch(ASYNC_ACTION_START());
    const res = await axios.post('/api/users', body, config);
    dispatch(REGISTER_SUCCESS(res.data.token));
    dispatch(loadUser());
    dispatch(ASYNC_ACTION_FINISH());
    toastr.success('Success', 'Account has been created');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => toastr.error('Oops', `Something went wrong ${error.msg}`));
    }
    dispatch(AUTH_ERROR());
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Login User
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    dispatch(ASYNC_ACTION_START());
    const res = await axios.post('/api/auth', body, config);
    dispatch(LOGIN_SUCCESS(res.data.token));
    dispatch(loadUser());
    dispatch(ASYNC_ACTION_FINISH());
    toastr.success('Success', 'You are logged in');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => toastr.error('Oops', `${error.msg}`));
    }
    dispatch(AUTH_ERROR());
    dispatch(ASYNC_ACTION_ERROR());
  }
};

// Logout / Clear Profile
export const logout = (history) => dispatch => {
  dispatch(LOGOUT());
  history.push('/login');
  toastr.success('Success', 'You are logged out');
};