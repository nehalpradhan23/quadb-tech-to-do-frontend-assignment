import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const SubSidebar2 = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-[240px] h-[88px] py-6 flex items-center ${
        theme === "dark" ? "bg-[#232323]" : "bg-[#fbfdfc]"
      }`}
    >
      <div className="py-2 px-4 gap-4 rounded-lg flex items-center justify-center">
        {theme === "dark" ? (
          <Image src="/sidebar/2/plusWhite.png" height={24} width={24} alt="" />
        ) : (
          <Image src="/sidebar/2/plusBlack.png" height={24} width={24} alt="" />
        )}
        <span
          className={`font-[500px] text-[15px] leading-5 ${
            theme === "dark" ? "text-white" : "text-[#1b281b]"
          }`}
        >
          Add list
        </span>
      </div>
    </div>
  );
};

export default SubSidebar2;
