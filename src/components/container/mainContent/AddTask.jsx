"use client";
import { useTheme } from "next-themes";
import React from "react";
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { IoRepeat } from "react-icons/io5";

const AddTask = () => {
  const { theme } = useTheme();
  return (
    // <div className="flex h-[178px] bg-gradient-to-b">
    <div className="flex h-[178px] relative">
      <div className="absolute h-full w-full opacity-10 bg-gradient-to-b to-[rgb(53,121,55)] from-[rgb(208,255,210)]"></div>
      {/* ================ */}
      <div className="w-full text-black flex px-5 py-5 z-10">
        <div className="flex flex-1 flex-col">
          <input
            className={`w-[74px] h-[20px] font-[400] leading-5 text-[15px] bg-transparent flex-1 outline-none ${
              theme === "dark"
                ? "placeholder-[#F5F5F5]"
                : "placeholder-[#1B281B]"
            }`}
            placeholder="Add A Task"
          />
          {/* buttons ----------- */}
          <div className="flex gap-4">
            <span>
              <CiBellOn
                className={`w-[24px] h-[20px] ${
                  theme === "dark" ? "text-[#F5F5F5]" : "text-[#1B281B]"
                }`}
              />
            </span>
            <span>
              <IoRepeat
                className={`w-[24px] h-[20px] ${
                  theme === "dark" ? "text-[#F5F5F5]" : "text-[#1B281B]"
                }`}
              />
            </span>
            <span>
              <CiCalendar
                className={`w-[24px] h-[20px] ${
                  theme === "dark" ? "text-[#F5F5F5]" : "text-[#1B281B]"
                }`}
              />
            </span>
          </div>
        </div>
        <div className="flex items-end">
          {theme === "dark" ? (
            <button className="px-4 py-2 text-[15px] leading-5 font-[500] rounded-lg w-[104px] h-9 text-[#CFCFCF] bg-[#357937]/85">
              ADD TASK
            </button>
          ) : (
            <button className="px-4 py-2 text-[15px] leading-5 font-[500] rounded-lg w-[104px] h-9 text-[#2D6930] bg-[#357937]/15">
              ADD TASK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
