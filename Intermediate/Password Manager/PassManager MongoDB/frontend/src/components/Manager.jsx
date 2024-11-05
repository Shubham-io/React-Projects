import React, { useState, useEffect } from "react";
import { IoCloudyNight, IoEye, IoEyeOff } from "react-icons/io5";
import AllPasswords from "./AllPasswords";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getPasswords = async () => {
    let req = await fetch(" http://localhost:3000/");
    let passwords = await req.json();
    console.log(passwords);
    setPasswordArray(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const savePassword = async () => {
    if (!form.site.trim() || !form.username.trim() || !form.password.trim()) {
      alert("please fill all entries");
      return;
    }

    // if any such id exists in the db, delelte it
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: form.id }),
    });

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, id: uuidv4() }),
    });

 
    setForm({ site: "", username: "", password: "" });
 

    toast.success("Password saved", {
      style: { backgroundColor: "#d4edda", color: "#155724" },
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 px-8 md:px-20  mt-8 w-full">
        <div className="mx-auto text-center">
          <h1 className="text-2xl font-bold">Password Manager</h1>
          <span>Your own password manager</span>
        </div>

        <div className="flex flex-col space-y-4 md:w-[70%]">
          <input
            value={form.site}
            name="site"
            onChange={handleChange}
            type="text"
            placeholder="Enter site URL"
            className="px-2 py-1 rounded-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
          />
          <div className="flex md:flex-row flex-col md:gap-10 gap-4">
            <input
              value={form.username}
              name="username"
              onChange={handleChange}
              d
              type="text"
              placeholder="Enter username"
              className="flex-1 px-2 py-1 rounded-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
            />
            <div className="relative">
              <input
                value={form.password}
                name="password"
                onChange={handleChange}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="px-2 py-1 rounded-full outline-none border-2 border-gray-800 focus:border-2 focus:border-gray-900"
              />
              <span
                className="absolute right-1 top-1 cursor-pointer"
                onClick={tooglePassword}
              >
                {isPasswordVisible ? (
                  <IoEyeOff size={28} className=" p-1" />
                ) : (
                  <IoEye size={28} className=" p-1" />
                )}
              </span>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={savePassword}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full border border-black"
          >
            Save Password
          </button>
        </div>
      </div>

      <AllPasswords
        passwordArray={passwordArray}
        setPasswordArray={setPasswordArray}
        setForm={setForm}
        form={form}
      />
    </>
  );
};

export default Manager;
