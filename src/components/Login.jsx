import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthServer from "../server/auth";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import ValidationError from "../ValidationError";
import Input from "./input";

const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  // end
  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());

    const user = { email, password };
    try {
      const response = await AuthServer.userLogin(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <div className="text-center pt-5 ">
      <form className=" w-25 m-auto">
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <ValidationError />
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
