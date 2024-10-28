import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    reset();
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Loggedin successfully");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="w-full  h-screen p-4">
        <h1 className="text-2xl text-center mt-6 font-semibold ">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center py-6 mt-10 space-y-6 bg-gray-100 rounded-md w-full max-w-lg mx-auto p-4"
        >
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a password"
              className="p-2 border border-gray-300 rounded-md w-full"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                Password should be at least 6 characters
              </span>
            )}
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 w-full">
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
