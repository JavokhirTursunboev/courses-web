import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaSkyatlas } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { removerItem } from "../helper/persist-helper";
import { logoutUser } from "../slice/auth";
const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    removerItem("token");
  };
  return (
    <div>
      <div className="container pt-2 d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to="/">
          <FaSkyatlas /> IPost
        </Link>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {loggedIn ? (
            <>
              <p className="me-3 py-2 text-dark text-decoration-none">
                {user.username}
              </p>
              <Link
                className="d-flex justify-content-center fs-3   align-items-center text-dark text-decoration-none"
                to={"/create-article"}
              >
                <GrAddCircle />
              </Link>
              <button
                type="button"
                className="border-0 btn  btn-outline-warning"
                onClick={handlerLogout}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="me-3 py-2 text-dark text-decoration-none"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="me-3 py-2 text-dark text-decoration-none"
                to={"/register"}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
