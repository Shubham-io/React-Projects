import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {

  return (
    <div
      id="tasklist"
      className="h-[60%] overflow-x-auto  w-full flex items-center justify-start gap-5 flex-nowrap py-5   mt-10"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} task={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} task={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={index} task={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={index} task={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
