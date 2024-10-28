import React, { useState, useEffect, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
  };

  useEffect(() => {
    if (Object.keys(newTask).length > 0) {
      console.log("creating task");
      const { employees, admin } = getLocalStorage();
      employees.forEach(function (employee) {
        if (assignTo === employee.firstName) {
          employee.tasks.push(newTask);
          employee.taskCounts.newTask += 1;
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ role: "employee", data: employee })
          );
          console.log(employee);
        }
      });

      localStorage.setItem("employees", JSON.stringify(employees));
      console.log(userData);
      setUserData(prevState => ({
        ...prevState,
        employees: employees,
        admin: admin
      }));
      console.log(userData);

      setTaskTitle("");
      setTaskDescription("");
      setTaskDate("");
      setAssignTo("");
      setCategory("");
    }
  }, [newTask]);

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between p-2 "
      >
        <div className="w-1/2">
          <div>
            <h3 className=" text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4"
              type="text"
              placeholder="enter your title"
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Data</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Assigne to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className=" text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="desing, dev etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start ">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            name=""
            id=""
            col="30"
            row="10"
            className="text-sm py-1 px-2 w-full h-44 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4"
          ></textarea>
          <button className="bg-emerald-500 font-semibold text-lg hover:bg-emerald-600 rounded py-2 px-4 mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
