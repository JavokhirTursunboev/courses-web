import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articleDetail: null,
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
      state.isLoading = false;
    },

    // ============= DETAILS ARTICLES ==================//
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = true;
    },

    // ========= POST ARTICLE ==============//

    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state) => {
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export const {
  getArticleStart,
  getArticleSuccess,
  getArticleFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,

  // =========  Post article======= //
  postArticleStart,
  postArticleFailure,
  postArticleSuccess,
} = articleSlice.actions;
export default articleSlice.reducer;
