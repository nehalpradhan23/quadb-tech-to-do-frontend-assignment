import React from "react";
import SubSidebar1 from "./SubSidebar1";
import SubSidebar2 from "./SubSidebar2";
import SubSidebar3 from "./SubSidebar3";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col relative mt-[80px]">
      <div className="h-[118px] w-[118px] bg-white rounded-full absolute -top-14 left-[25%]">
        <Image src="/sidebar/user.png" width={118} height={118} alt="" />
      </div>
      <div
        className={`w-[280px] h-[850px] flex flex-col items-center mr-[48px] gap-[9px] pt-[80px] ${
          theme === "dark" ? "bg-[#2c2c2c]" : "bg-[#eef6ef]"
        }`}
      >
        <span
          className={`text-[15px] leading-5 font-[500px] ${
            theme === "dark" ? "text-white" : "text-[#1b281b]"
          }`}
        >
          Hey, user
        </span>
        <SubSidebar1 />
        <SubSidebar2 />
        <SubSidebar3 />
      </div>
    </div>
  );
};

export default Sidebar;
