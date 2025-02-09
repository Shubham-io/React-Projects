import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <h1 className="text-4xl text-white font-bold text-center mt-4">
        Welcome to Task Manager
      </h1>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default App;
