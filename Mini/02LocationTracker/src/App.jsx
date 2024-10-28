import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(35.682839); // Initial latitude for Tokyo
  const [lon, setLon] = useState(139.759455); // Initial longitude for Tokyo

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      const data = res.data;
      setIpDetails(data);
      setLat(data.latitude);
      setLon(data.longitude);
    });
  }, [lat, lon]); // Only run once when the component mounts

  return (
    <div className="w-full h-screen bg-black/60 flex justify-center items-center ">
      <Map lat={lat} lon={lon} />
      <div className="bg-slate-300 h-[200px] mx-6 ">
        <h1 className="text-3xl font-bold text-center">
          Get your IP and location
        </h1>
        <div className=" mt-8 px-4 py-2 space-y-1">
          <p>Country currency: {ipDetails.currency_name}</p>
          <p>IP address(IPv6): {ipDetails.ip}</p>
          <p>
            Approx location: {ipDetails.city}, {ipDetails.region},{" "}
            {ipDetails.country_name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
