import React, { act, useState } from "react";
import "./LoginSignup.css";

import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <div className="icon">
              <FaRegUser />
            </div>
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <div className="icon">
            <MdOutlineMailOutline />
          </div>

          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <div className="icon">
            <MdPassword />
          </div>

          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action==="Sign Up"?<div> </div>: <div className="forgot-password">
        Lost Password? <span>click here</span>
      </div>}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
