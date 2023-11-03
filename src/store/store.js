import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "../slice/articleSlice";
import AuthSlice from "../slice/auth";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    article: articleSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
