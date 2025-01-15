"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const data = ["data", "data", "data", "data"];
const TaskList = () => {
  const { theme } = useTheme();
  return (
    <div>
      {data.map((item) => (
        <div
          className={`h-[80px] py-4 flex items-center justify-between border-t-[1.5px] pr-8 ${
            theme === "dark" ? "border-white/20" : ""
          }`}
        >
          <div className="w-[365px] h-12 flex items-center">
            <div className="p-[11px] h-10 w-10 flex items-center justify-center cursor-pointer">
              {/* <input type="checkbox" className="" name="" id="" /> */}
              {theme === "dark" ? (
                <Image
                  src="/tasks/checkboxEmptyWhite.png"
                  width={18}
                  height={18}
                  alt=""
                />
              ) : (
                <Image
                  src="/tasks/checkboxEmptyBlack.png"
                  width={18}
                  height={18}
                  alt=""
                />
              )}
            </div>
            <span>{item}</span>
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
  );
};

export default TaskList;
