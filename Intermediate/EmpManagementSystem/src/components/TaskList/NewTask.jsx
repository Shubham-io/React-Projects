import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ task }) => {
  const { userData, setUserData } = useContext(AuthContext);

  const handleTask = () => {
    // Find the task in the user's tasks array
    const updatedTasks = userData.tasks.map((t) => {
      if (t.taskTitle === task.taskTitle && t.category === task.category) {
        return { ...t, newTask: false, active: true }; // Update task to active
      }
      return t;
    });

    // Update taskCounts
    const updatedTaskCounts = {
      ...userData.taskCounts,
      newTask: userData.taskCounts.newTask - 1,
      active: userData.taskCounts.active + 1,
    };

    // Set the updated userData
    const updatedUserData = {
      ...userData,
      tasks: updatedTasks,
      taskCounts: updatedTaskCounts,
    };

    // Update the state and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData.employees));
  };

  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-slate-500 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 py-1 text-sm rounded">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-4">
        <button onClick={handleTask} className="bg-blue-500 px-4 py-2">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
