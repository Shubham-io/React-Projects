import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLocalStorage } from "../../utils/localStorage";

const AllTasks = () => {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
      <div className="bg-red-400 font-semibold mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg">Employee Name</h2>
        <h2 className="w-1/5 text-lg ">New Task</h2>
        <h2 className="w-1/5 text-lg ">Active Task</h2>
        <h2 className="w-1/5 text-lg ">Completed</h2>
        <h2 className="w-1/5 text-lg ">Failed</h2>
      </div>
      <div>
        {userData.employees.map(function (employee) {
          return (
            <div
              key={employee.id}
              className="border   border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-lg ">{employee.firstName}</h2>
              <h3 className="w-1/5 text-lg text-blue-400">
                {employee.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg text-yellow-400 ">
                {employee.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg text-green-400">
                {employee.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg text-red-400">
                {employee.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
