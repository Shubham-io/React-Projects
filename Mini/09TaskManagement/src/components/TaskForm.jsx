import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

const TaskForm = () => {
  const {
    state: { tasks, editingTask },
    dispatch,
  } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  //   pre-fill the form
  useEffect(() => {
    if (editingTask) {
      /* editingTask?.title: Safely accesses title if editingTask exists.
          || "": Provides a fallback value ("") if title is falsy. */
      setTitle(editingTask?.title || "");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Task title cannot be empty");
      return;
    }

    if (editingTask) {
      // Update the task
      dispatch({
        type: "EDIT_TASK",
        payload: { ...editingTask, title },
      });

      dispatch({ type: "SET_EDITING_TASK", payload: null }); // Clear editing state
    } else {
      // Add a new task
      dispatch({
        type: "ADD_TASK",
        payload: { id: uuidv4(), title, completed: false },
      });
    }
    setTitle("");
  };

  // filter task based on search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredTasks);

  return (
    <>
      <div className="bg-purple-800 flex justify-between items-center py-4 mt-10 mx-10 px-24 rounded">
        {/* task input box  */}
        <form onSubmit={handleSubmit} className="w-[56%] flex justify-between ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task"
            className="w-[80%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black text-lg"
            aria-label="Task Title"
          />
          <button
            type="submit"
            className="ml-4 bg-black text-white px-4 py-2 rounded-md text-lg "
          >
            Add Task
          </button>
        </form>
        {/* search box */}
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // update search query
            placeholder="Search task"
            className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black text-lg"
            aria-label="Search Tasks"
          />
        </div>
      </div>

      {/* query search box  */}
      <div className="mt-4 mb-6">
        <ul>
          {searchQuery && filteredTasks.length > 0
            ? filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="bg-green-300 text-2xl px-24 py-4 mt-1 rounded-md mx-10"
                >
                  {task.title}
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
};
export default TaskForm;
