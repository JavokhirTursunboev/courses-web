import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
    },
    signUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { signUserStart, signUserFailure, signUserSuccess } =
  authSlice.actions;
export default authSlice.reducer;
