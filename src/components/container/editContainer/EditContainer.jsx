import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const EditContainer = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-[452px] h-[964px] ${
        theme === "dark" ? "" : "bg-[#eef6ef]"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-1 h-full">
          {/* table ============== */}
          <div className={`w-full h-[532px] py-6 flex flex-1`}>
            {/* column -------------------- */}
            <div className={`w-[404px] h-[360px] mt-8 ml-12`}>
              {/* text cell ------------------------ */}
              <div
                className={`flex w-[404px] h-[80px] mt-4 justify-between py-4 pr-8 items-center border-t-[1.5px] ${
                  theme === "dark"
                    ? "border-[#496e4b]/20"
                    : "border-[#496e4b]/20"
                }`}
              >
                <div className="flex w-[365px] h-[48px] items-center">
                  <div className="w-[48px] h-[48px] p-1 flex items-center justify-center">
                    {theme === "dark" ? (
                      <Image
                        src="/editTask/1/checkboxEmptyWhite.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/editTask/1/checkboxEmptyBlack.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    )}
                  </div>
                  <span
                    className={`w-[90px] h-5 font-normal leading-5 text-[15px]`}
                  >
                    name
                  </span>
                </div>
                <div className="">
                  {theme === "dark" ? (
                    <Image
                      src="/editTask/1/starWhite.png"
                      height={24}
                      width={24}
                      alt=""
                    />
                  ) : (
                    <Image
                      src="/editTask/1/starBlack.png"
                      height={24}
                      width={24}
                      alt=""
                    />
                  )}
                </div>
              </div>
              {/* add step text cell ------------------------ */}
              <div
                className={`flex w-[404px] h-[56px] mt-4 justify-between py-4 pr-8 items-center border-t-[1.5px] ${
                  theme === "dark"
                    ? "border-[#496e4b]/20"
                    : "border-[#496e4b]/20"
                }`}
              >
                <div className="flex w-[365px] h-[48px] items-center">
                  <div className="w-[48px] h-[48px] p-1 flex items-center justify-center">
                    {theme === "dark" ? (
                      <Image
                        src="/tasks/2/plusWhite.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/tasks/2/plusBlack.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    )}
                  </div>
                  <span
                    className={`w-[90px] h-5 font-normal leading-5 text-[15px]`}
                  >
                    Add Step
                  </span>
                </div>
              </div>
              {/* set reminder text cell ------------------------ */}
              <div
                className={`flex w-[404px] h-[56px] mt-4 justify-between py-4 pr-8 items-center border-t-[1.5px] ${
                  theme === "dark"
                    ? "border-[#496e4b]/20"
                    : "border-[#496e4b]/20"
                }`}
              >
                <div className="flex w-[365px] h-[48px] items-center">
                  <div className="w-[48px] h-[48px] p-1 flex items-center justify-center">
                    {theme === "dark" ? (
                      <Image
                        src="/editTask/3/bellWhite.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/editTask/3/bellBlack.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    )}
                  </div>
                  <span
                    className={`w-[90px] h-5 font-normal leading-5 text-[15px]`}
                  >
                    Set Reminder
                  </span>
                </div>
              </div>
              {/* add due date text cell ------------------------ */}
              <div
                className={`flex w-[404px] h-[56px] mt-4 justify-between py-4 pr-8 items-center border-t-[1.5px] ${
                  theme === "dark"
                    ? "border-[#496e4b]/20"
                    : "border-[#496e4b]/20"
                }`}
              >
                <div className="flex w-[365px] h-[48px] items-center">
                  <div className="w-[48px] h-[48px] p-1 flex items-center justify-center">
                    {theme === "dark" ? (
                      <Image
                        src="/editTask/4/calendarWhite.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/editTask/4/calendarBlack.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    )}
                  </div>
                  <span
                    className={`w-[150px] h-5 font-normal leading-5 text-[15px]`}
                  >
                    Add due date
                  </span>
                </div>
              </div>
              {/* repeat text cell ------------------------ */}
              <div
                className={`flex w-[404px] h-[56px] mt-4 justify-between py-4 pr-8 items-center border-t-[1.5px] ${
                  theme === "dark"
                    ? "border-[#496e4b]/20"
                    : "border-[#496e4b]/20"
                }`}
              >
                <div className="flex w-[365px] h-[48px] items-center">
                  <div className="w-[48px] h-[48px] p-1 flex items-center justify-center">
                    {theme === "dark" ? (
                      <Image
                        src="/editTask/5/repeatWhite.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/editTask/5/repeatBlack.png"
                        height={24}
                        width={24}
                        alt=""
                      />
                    )}
                  </div>
                  <span
                    className={`w-[90px] h-5 font-normal leading-5 text-[15px]`}
                  >
                    Repeat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* close and delete ====================== */}
        <div
          className={`w-[452px] h-[69px] py-[42px] px-[13px] justify-end border-t flex items-center mb-12 ${
            theme === "dark" ? "border-t-[#357937]/60" : ""
          }`}
        >
          <div className="flex justify-between items-center w-full">
            {/* close btn --------- */}
            <div className="">
              {theme === "dark" ? (
                <Image src="/editTask/crossWhite.png" height={14} width={15} />
              ) : (
                <Image src="/editTask/crossWhite.png" height={14} width={15} />
              )}
            </div>
            {/* ----------------------- */}
            <span>Created Today</span>
            {/* ------------------------------------ */}
            <div className="">
              <Image src="/editTask/deleteWhite.png" width={23} height={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
