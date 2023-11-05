import React from "react";

const TextArea = ({ label, state, setState, height = "100px" }) => {
  return (
    <div className="form-floating">
      <textarea
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder={label}
        className="form-control"
        id="exampleFormControlTextarea1"
        style={{ height: height }}
      ></textarea>
      <label htmlFor="exampleFormControlTextarea1">{label}</label>
    </div>
  );
};

export default TextArea;
