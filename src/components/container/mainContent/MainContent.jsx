import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTaskList from "./CompletedTaskList";

const MainContent = () => {
  return (
    <div className="w-full">
      Title
      <AddTask />
      <TaskList />
      <CompletedTaskList />
    </div>
  );
};

export default MainContent;
