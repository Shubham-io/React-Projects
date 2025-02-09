import React, { useEffect, createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer";

// initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// create context
export const TaskContext = createContext();

// provider context
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  
  // Sync state with local storage whenever the tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
