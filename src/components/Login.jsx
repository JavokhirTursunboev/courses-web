import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthServer from "../server/auth";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import Input from "./input";

const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  // redux
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  // end

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());

    const user = { email, password };
    try {
      const response = await AuthServer.userLogin(user);
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error.response.data);
      dispatch(signUserFailure(error.response.data));
    }
  };
  return (
    <div className="text-center pt-5 ">
      <form className=" w-25 m-auto">
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <Input label={"Email"} state={email} setState={setMail} />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={loginHandler}
        >
          {isLoading ? "loading..." : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
