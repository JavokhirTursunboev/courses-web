import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthServer from "../server/auth";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/auth";
import Input from "./input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  // ===== Redux =======//

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthServer.userRegister(user);
      console.log(response);
      console.log(user);
      dispatch(signUserSuccess());
    } catch (error) {
      dispatch(signUserFailure());
    }
  };
  return (
    <div className="text-center pt-5">
      <form className=" w-25 m-auto">
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
        <Input label={"Username"} state={name} setState={setName} />
        <Input label={"Email"} state={email} setState={setMail} />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />

        <div className="checkbox mb-3"></div>
        <button
          onClick={registerHandler}
          type="button"
          className="btn btn-outline-primary"
        >
          {isLoading ? "loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Register;
