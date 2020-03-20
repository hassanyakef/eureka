import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
  },
  reducers: {
    ASYNC_ACTION_START (state) {
      state.loading = true;
    },
    ASYNC_ACTION_FINISH (state) {
      state.loading = false;
    },
    ASYNC_ACTION_ERROR (state) {
      state.loading = false;
    },
    USER_LOADED (state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    REGISTER_SUCCESS (state, action) {
      const { payload } = action;
      localStorage.setItem('token', payload);
      state.token = payload;
      state.isAuthenticated = true;
    },
    LOGIN_SUCCESS (state, action) {
      const { payload } = action;
      localStorage.setItem('token', payload);
      state.token = payload;
      state.isAuthenticated = true;
    },
    AUTH_ERROR (state) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
    },
    LOGOUT (state) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
    },
  }
});

export const {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR
} = authSlice.actions;

export default authSlice.reducer;