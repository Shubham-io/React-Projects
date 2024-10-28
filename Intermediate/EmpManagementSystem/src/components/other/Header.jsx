import React, { useState } from "react";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // clear user state of App.js to go to login page
    changeUser("");
  };
 
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{data.firstName}</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
