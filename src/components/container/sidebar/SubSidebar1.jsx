import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const data = [
  {
    imageSrcWhite: "/sidebar/1/allTasksWhite.png",
    imageSrcBlack: "/sidebar/1/allTasksBlack.png",
    title: "All Tasks",
  },
  {
    imageSrcWhite: "/sidebar/1/todayWhite.png",
    imageSrcBlack: "/sidebar/1/todayBlack.png",
    title: "Today",
  },
  {
    imageSrcWhite: "/sidebar/1/starWhite.png",
    imageSrcBlack: "/sidebar/1/starBlack.png",
    title: "Important",
  },
  {
    imageSrcWhite: "/sidebar/1/plannedWhite.png",
    imageSrcBlack: "/sidebar/1/plannedBlack.png",
    title: "Planned",
  },
  {
    imageSrcWhite: "/sidebar/1/assignedWhite.png",
    imageSrcBlack: "/sidebar/1/assignedBlack.png",
    title: "Assigned to me",
  },
];

const SubSidebar1 = () => {
  const { theme } = useTheme();
  // ==================================
  return (
    <div
      className={`w-[240px] h-[248px] py-6 ${
        theme === "dark" ? "bg-[#232323]" : "bg-[#fbfdfc]"
      }`}
    >
      {data.map((item) => (
        <div className="w-[240px] h-10 rounded-lg px-4 py-2 gap-4 flex items-center">
          {theme === "dark" ? (
            <Image src={item.imageSrcWhite} width={24} height={24} alt="" />
          ) : (
            <Image src={item.imageSrcBlack} width={24} height={24} alt="" />
          )}
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SubSidebar1;
