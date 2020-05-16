import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    profiles: null,
    loading: false,
    error: {}
  },
  reducers: {
    GET_PROFILE(state, action) {
     state.profile = action.payload;
     state.loading = false;
    },
    GET_PROFILES(state, action) {
      state.profiles = action.payload;
      state.loading = false;
    },
    PROFILE_ERROR(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    CLEAR_PROFILE(state) {
      state.profile = null;
      state.loading = false;
    }
  }
});

// Destructure and export the plain action creators
export const {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CREATE_PROFILE
} = profileSlice.actions;

export default profileSlice.reducer;