import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-slate-500 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 px-3 py-1 text-sm rounded">
          {" "}
          {task.category}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-2">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};

export default FailedTask;
