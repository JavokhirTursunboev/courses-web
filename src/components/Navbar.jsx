import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { FaSkyatlas } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div className="container pt-2 d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to="/">
          <FaSkyatlas /> IPost
        </Link>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link className="me-3 py-2 text-dark text-decoration-none" to={'/login'}>
            Login
          </Link>
          <Link className="me-3 py-2 text-dark text-decoration-none" to={'/register'}>
            Sign Up
          </Link>

        
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
