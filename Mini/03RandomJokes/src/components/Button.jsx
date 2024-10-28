import React from "react";

const Button = (prop) => {
  return (
    <button onClick={prop.getJoke} className="bg-blue-600 text-white px-4 py-2 mt-8 rounded hover:bg-blue-500">
      Get a joke
    </button>
  );
};

export default Button;
