import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ArticleService from "../server/article";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/articleSlice";
import ArticleForm from "./ArticleForm";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  // ========== redux =====
  const dispatch = useDispatch();


  // form submit func
  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { body, title, description };
    dispatch(postArticleStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };
  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };
  return (
    <div className="text-center">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
