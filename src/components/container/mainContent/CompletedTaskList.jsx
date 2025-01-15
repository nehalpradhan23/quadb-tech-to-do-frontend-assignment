"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const data = ["data", "data", "data", "data"];
const CompletedTaskList = () => {
  const { theme } = useTheme();
  return (
    <div>
      <span className="h-[20px] font-[400px] text-[15px] leading-5">
        Completed
      </span>
      <div className="py-[25px]">
        {data.map((item) => (
          <div
            className={`h-[80px] py-4 flex items-center justify-between border-t-[1.5px] pr-8 ${
              theme === "dark" ? "border-white/20" : ""
            }`}
          >
            <div className="w-[365px] h-12 flex items-center">
              <div className="p-[11px] h-10 w-10 flex items-center justify-center">
                {/* <input type="checkbox" className="" name="" id="" /> */}
                <Image
                  alt=""
                  src="/tasks/greenbox.png"
                  className="cursor-pointer relative"
                  height={24}
                  width={24}
                />
                <Image
                  alt=""
                  src="/tasks/check.png"
                  className="cursor-pointer absolute"
                  height={24}
                  width={24}
                />
              </div>
              <span className="line-through text-[15px] leading-5 font-[400px]">
                {item}
              </span>
            </div>
            {/* star button =============================== */}
            {theme === "dark" ? (
              <Image
                alt=""
                src="/tasks/starWhite.png"
                className="cursor-pointer"
                height={24}
                width={24}
              />
            ) : (
              <Image
                alt=""
                src="/tasks/starBlack.png"
                className="cursor-pointer"
                height={24}
                width={24}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskList;
