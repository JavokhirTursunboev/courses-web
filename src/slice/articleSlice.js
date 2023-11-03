import { createSlice } from "@reduxjs/toolkit";
import auth from "./auth";

const initialState = {
  isLoading: false,
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getArticleStart, getArticleSuccess, getArticleFailure } =
  articleSlice.actions;
export default articleSlice.reducer;
