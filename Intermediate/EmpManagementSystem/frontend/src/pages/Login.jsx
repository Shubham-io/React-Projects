import React, { useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );
      //   console.log(response);
      if (response.data.success) {

        login(response.data.user);
        // console.log(response.data.user);
        localStorage.setItem("token", response.data.token);
        if (response.data.user.role == "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("Server Error");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-600 from-50% to-gray-100 to-50%">
      <h2 className="text-3xl text-white font-semibold mb-6">
        Employee Management System
      </h2>
      <div className="w-1/4  p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-indigo-600 form-checkbox"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
