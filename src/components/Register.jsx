import { useState } from "react";
import Input from "./input";

const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // ===== Redux =======//
  return (
    <div className="text-center pt-5">
      <form className=" w-25 m-auto">
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
        <Input label={"Username"} state={name} setState={setName} />
        <Input label={"Email"} state={mail} setState={setMail} />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />

        <div className="checkbox mb-3">
        </div>
        <button type="button" className="btn btn-outline-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
