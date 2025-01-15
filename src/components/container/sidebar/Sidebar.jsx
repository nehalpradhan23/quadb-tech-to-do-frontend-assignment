import React, { useState } from "react";
import SubSidebar1 from "./SubSidebar1";
import SubSidebar2 from "./SubSidebar2";
import SubSidebar3 from "./SubSidebar3";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/userAuth/authSlice";

const Sidebar = () => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // =================================================
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
          onClick={() => setShowModal(!showModal)}
          // onMouseLeave={() => setShowModal(false)}
          className={`cursor-pointer text-[15px] leading-5 font-[500px] ${
            theme === "dark" ? "text-white" : "text-[#1b281b]"
          }`}
        >
          Hey, user
        </span>
        {showModal && (
          <div
            className={`absolute top-[120px] left-[25%] border shadow-lg p-4 rounded ${
              theme === "dark"
                ? "bg-[#3a3a3a] text-white"
                : "bg-[#f9f9f9] text-black"
            }`}
          >
            <button
              onClick={() => {
                dispatch(logout());
                // localStorage.setItem("todoAuthenticated", false);
              }}
            >
              Logout
            </button>
          </div>
        )}
        <SubSidebar1 />
        <SubSidebar2 />
        <SubSidebar3 />
      </div>
    </div>
  );
};

export default Sidebar;
