import React from "react";
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
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/bollloma", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      toast.error("Something went wrong");
    }
    reset();
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-700 mt-2">
          Please fill out the form below to get in touch.
        </p>
      </div>
      <div className="w-full md:w-1/3 mx-auto bg-slate-200 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Send Your Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 font-medium">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-sm text-red-500 mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-medium">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 font-medium">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="2"
              placeholder="Enter your message"
              className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <span className="text-sm text-red-500 mt-1">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
