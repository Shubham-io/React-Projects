import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo1.jpg";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-slate-600 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div className="logo px-4 py-2 cursor-pointer btn-ghost rounded-xl"></div>
        <Link to="/">
          <h1 className="text-3xl font-semibold">Pico</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-3 px-2">
        <Link
          to="/login"
          className="bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
        >
          Login
        </Link>
        <Link
          to="/"
          className="bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
