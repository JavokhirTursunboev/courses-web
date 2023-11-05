import React, { useState } from "react";
import Input from "./input";
import TextArea from "./textArea";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  return (
    <div className="text-center">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto">
        <form>
          <Input label={"Title"} state={title} setState={setTitle} />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
          />
          <TextArea
            label={"Body"}
            state={body}
            setState={setBody}
            height="12rem"
          />
          <button
            className="btn btn-lg btn-secondary w-100 mt-2  bg-secondary"
            type="submit"
          >
            Primary
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
