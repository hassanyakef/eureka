import { createSlice } from '@reduxjs/toolkit';

const clearAuthState = (state) => {
  localStorage.removeItem('token');
  state.token = null;
  state.isAuthenticated = false;
};

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
    REGISTER_SUCCESS: (state, action) => populateAuthState(state, action),
    LOGIN_SUCCESS: (state, action) => populateAuthState(state, action),
    AUTH_ERROR: clearAuthState,
    LOGOUT: clearAuthState
  }
});

const populateAuthState = (state, action) => {
  const { payload } = action;
  localStorage.setItem('token', payload);
  state.token = payload;
  state.isAuthenticated = true;
};

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