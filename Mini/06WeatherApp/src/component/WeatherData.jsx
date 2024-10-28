import React from "react";

const WeatherData = ({ data, error }) => {
  if (!data || !data.main) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-8 space-y-2  ">
      <h2 className="text-xl">Weather in {data.name}</h2>
      <p>Temperature: {Math.floor(data.main.temp - 273.15)} °C</p>
      <p>Humidity: {data.main.humidity} %</p>
      <p>{error}</p>
    </div>
  );
};

export default WeatherData;
