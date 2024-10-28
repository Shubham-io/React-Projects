import { useState } from "react";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-4xl bg-green-300 w-full font-bold py-1 inline px-8 rounded">
          Random Joke generator
        </h1>
        <Joke />
      </div>
    </>
  );
}

export default App;
