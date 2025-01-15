"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useSelector } from "react-redux";

const data = ["data", "data", "data", "data"];
const TaskList = () => {
  const { theme } = useTheme();
  const listStyle = useSelector((state) => state.listStyle.listStyle);
  // ========================================================
  return (
    <div>
      {listStyle === "list" ? (
        <>
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
        </>
      ) : (
        <div className="flex flex-wrap gap-4">
          {/* <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"> */}
          {data.map((item) => (
            <div
              className={`h-[147px] w-[320px] py-4 flex items-center justify-between border-[1.5px] pr-8 border-[#496e4b]/20`}
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
      )}
    </div>
  );
};

export default TaskList;
