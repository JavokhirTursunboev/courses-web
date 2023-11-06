import React from "react";
import { useSelector } from "react-redux";
import Input from "./input";
import TextArea from "./textArea";

const ArticleForm = (props) => {
  //  ========= redux =============//
  const { isLoading } = useSelector((state) => state.article);
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  } = props;
  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea label={"Body"} state={body} setState={setBody} height="12rem" />
      <button
        disabled={isLoading}
        className="btn btn-lg btn-secondary w-100 mt-2  bg-secondary"
        type="submit"
      >
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
};

export default ArticleForm;
