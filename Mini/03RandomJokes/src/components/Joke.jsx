import React, { useEffect, useState } from "react";
import Button from "./Button";

const Joke = () => {
  const [Joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single").then((res) =>
      res.json().then((data) => setJoke(data.joke))
    );
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <Button getJoke={getJoke} />
      <div className="w-full mt-10 bg-slate-300 py-10 rounded-lg">
        <p className="text-2xl">{Joke}</p>
      </div>
    </div>
  );
};

export default Joke;
