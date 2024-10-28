import { useEffect, useState } from "react";
import WeatherInput from "./component/WeatherInput";
import WeatherData from "./component/WeatherData";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const key = "7fcad5971b9610527186d58030bfdbfa";
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  console.log(endPoint);

  const fetchData = async () => {
    const res = await fetch(endPoint);
    const result = await res.json();
    if (result.main) {
      setError("");
      setData(result);
    } else {
      setData("");
      setError("Invalid city entered!");
    }
  };

  function handleInput(e) {
    setCity(e.target.value);
  }

  function handleClick() {
    fetchData(); // calling API
    setCity(""); // Clear input field
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      fetchData();
      setCity("");
    }
  }

 


  return (
    <>
      <div className="App flex flex-col  items-center w-1/4 h-[350px] bg-gray-200 p-4 rounded-xl ">
        <div className="header flex gap-2">
          <h1 className="mb-4 text-3xl font-bold">Weather App</h1>
          <img src="./weather.png" alt="" />
        </div>
        <WeatherInput
          city={city}
          onInputChange={handleInput}
          onButtonClick={handleClick}
          onKeyDown={onKeyDown}
        />
        <WeatherData data={data} error={error} />
      </div>
    </>
  );
}

export default App;
