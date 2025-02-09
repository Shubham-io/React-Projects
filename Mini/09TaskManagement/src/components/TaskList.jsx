import React, { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const handleEdit = (task) => {
    dispatch({
      type: "SET_EDITING_TASK",
      payload: task, // Set the editing task
    });
  };

  const handleComplete = (task) => {
    // setisCompleted(!isCompleted);
    dispatch({
      type: "EDIT_TASK",
      payload: { ...task, completed: !task.completed }, // toggle task complete
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };
 
  return (
    <div>
      <ul className="mx-10 rounded space-y-1 mt-1 scroll-container">
        {state.tasks.map((task) => (
          <li
            key={task.id}
            className="w-full bg-slate-100 flex justify-around py-2 items-center rounded-md"
          >
            <div className="w-1/2 px-2 flex justify-between items-center">
              <span
                className={`text-2xl w-1/2 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.title}
              </span>
              <div className="p-2  rounded text-lg">
                {task.completed ? (
                  <span className="bg-green-500 text-white px-3 py-2 rounded">
                    Done
                  </span>
                ) : (
                  <span className="bg-blue-500 text-white px-2 py-2  rounded">
                    Pending
                  </span>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleComplete(task)}
                className={`px-4 py-2 text-lg rounded ${
                  task.completed
                    ? "bg-green-500 text-black"
                    : "bg-blue-500 text-white"
                }`}
              >
                {task.completed ? "Keep is pending" : "Mark as complete"}
              </button>

              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 px-6 py-2 rounded text-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 px-3 py-2 rounded text-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
