import React from "react";

const WeatherInput = ({ city, onInputChange, onButtonClick, onKeyDown }) => {
  return ( 
    <div className="flex flex-col items-center justify-center mt-3">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        className="mb-4 px-6 py-2 rounded border  w-1/7"
      />
      <button
        onClick={onButtonClick}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default WeatherInput;
