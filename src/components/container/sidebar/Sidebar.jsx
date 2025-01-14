import React from "react";
import SubSidebar1 from "./SubSidebar1";
import SubSidebar2 from "./SubSidebar2";
import SubSidebar3 from "./SubSidebar3";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[280px] h-[850px] bg-[#EEF6EF] flex flex-col items-center">
      <div className="h-[118px] w-[118px] bg-white rounded-full"></div>
      {/* <Image /> */}
      <SubSidebar1 />
      <SubSidebar2 />
      <SubSidebar3 />
    </div>
  );
};

export default Sidebar;
