import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userFeedback = {
      fullname: data.name,
      email: data.email,
      message: data.message,
    };

    reset();

    await axios
      .post("http://localhost:4001/contact", userFeedback)
      .then((res) => {
        console.log(res);
        toast.success("Response submitted successfully");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("Error " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="w-full  h-screen p-4">
        <h1 className="text-2xl text-center mt-6 font-semibold ">Contact Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center py-6 mt-10 space-y-6 bg-gray-100 rounded-md w-full max-w-lg mx-auto p-4"
        >
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 border border-gray-300 rounded-md w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md w-full"
              {...register("email", { required: true, minLength: 6 })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Drop your message"
              className="p-2 border border-gray-300 rounded-md w-full"
              {...register("message", { required: true })}
            ></textarea>

            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
