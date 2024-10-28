import React from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // console.log(watch("password"))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-purple-200 flex flex-col md:w-1/3 lg:w-1/4 h-auto  rounded-xl "
    >
      <h1 className="text-3xl text-center font-bold my-4">Registration Form</h1>
      <div className="flex flex-col items-center py-2 space-y-2">
        <label htmlFor="name" className="text-2xl">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="px-4 py-1 rounded w-10/12 "
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <small className="block text-red-700 font-bold">
            {errors.name.message}
          </small>
        )}
      </div>

      <div className="flex flex-col items-center py-2 space-y-2">
        <label htmlFor="email" className="text-2xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="px-4 py-1 rounded w-10/12 "
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <small className="block  text-red-700 font-bold">
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="flex flex-col items-center py-2 space-y-2">
        <label htmlFor="password" className="text-2xl">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="px-4 py-1 rounded w-10/12"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <small className="block text-red-700 font-bold">
            {errors.password.message}
          </small>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 bg-blue-400 hover:bg-blue-500 rounded py-2 px-6 my-4 text-xl font-semibold"
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormValidation;
