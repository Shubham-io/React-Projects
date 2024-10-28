import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen  items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4 p-2"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="py-3 px-5 text-xl text-white rounded-full outline-none placeholder:text-gray-400 bg-transparent border-2 border-emerald-600"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="py-3 px-5 text-xl text-white rounded-full outline-none placeholder:text-gray-400 bg-transparent border-2 border-emerald-600"
            type="password"
            placeholder="Enter password"
          />
          <button className="py-3 px-5 mt-2 text-xl text-white rounded-full outline-none bg-emerald-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
