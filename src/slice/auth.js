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
    signUserSuccess: (state) => {
      state.isLoading = false;
      state.loggedIn = true;
    },
    signUserFailure: (state) => {
      state.error = "error";
      state.isLoading = false;
    },
  },
});

export const { signUserStart, signUserFailure, signUserSuccess } =
  authSlice.actions;
export default authSlice.reducer;
