import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helper/persist-helper";
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
      setItem("token", action.payload.token);
    },
    signUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUser: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { signUserStart, signUserFailure, signUserSuccess, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
