import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTaskList from "./CompletedTaskList";
import { useTheme } from "next-themes";
import Image from "next/image";

const MainContent = () => {
  const { theme } = useTheme();
  return (
    <div className={`w-full mx-auto ${theme === "dark" ? "" : ""}`}>
      <div
        className={`h-[32px] py-1 flex items-center ${
          theme === "dark" ? "" : ""
        }`}
      >
        <span
          className={`font-[500px] text-[13px] leading-[16px] ${
            theme === "dark" ? "text-[#76b878]" : "text-[#142e15]/60"
          }`}
        >
          To do
        </span>
        <div className="h-6 w-6 flex justify-center items-center">
          {theme === "dark" ? (
            <Image
              src="/mainContent/arrowDownGreen.png"
              width={12}
              height={6}
              alt=""
            />
          ) : (
            <Image
              src="/mainContent/arrowDownBlack.png"
              width={12}
              height={6}
              alt=""
            />
          )}
        </div>
      </div>
      <AddTask />
      <TaskList />
      <CompletedTaskList />
    </div>
  );
};

export default MainContent;
