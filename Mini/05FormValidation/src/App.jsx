import { useState } from "react";

import "./App.css";
import FormValidation from "./components/FormValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app w-full min-h-screen flex justify-center items-center">
        <FormValidation />
      </div>
    </>
  );
}

export default App;
