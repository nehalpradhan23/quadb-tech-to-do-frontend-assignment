import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const SubSidebar3 = () => {
  const { theme } = useTheme();
  return (
    <div className="px-3 h-[321px] w-[261px] gap-4">
      {/* <div className="bg-red-500 w-[237px] h-[321px] py-[7px] gap-[19px]"> */}
      <div
        className={`w-[237px] h-[321px] py-[7px] gap-[19px] justify-center items-center ${
          theme === "dark" ? "bg-[#232323]" : "bg-[#fbfdfc]"
        }`}
      >
        <div className="w-[263px] h-[307px] flex flex-col justify-center">
          <div className="flex flex-col justify-center pl-5 pt-[18.61px]">
            <div className="font-[500px] text-[15px] leading-4 w-20 h-4">
              Today Tasks
            </div>
            <span className="font-[500px] text-[21.27px] leading-[25.75px] h-[26px] w-[21px]">
              11
            </span>
          </div>
          {theme === "dark" ? (
            <Image
              src="/sidebar/2/chartBlack.png"
              width={236}
              height={236}
              alt=""
            />
          ) : (
            <Image
              src="/sidebar/2/chartWhite.png"
              width={236}
              height={236}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubSidebar3;
