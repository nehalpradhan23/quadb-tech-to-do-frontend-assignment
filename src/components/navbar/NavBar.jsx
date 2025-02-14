"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/sidebar/sidebarSlice.js";
import { toggleListStyle } from "@/redux/slices/listStyle/listStyleSlice";

const NavBar = () => {
  const { theme } = useTheme();
  // console.log(theme);
  const dispatch = useDispatch();
  const listStyle = useSelector((state) => state.listStyle.listStyle);

  return (
    <div className="flex justify-between py-3 dark:bg-[#242424] bg-[#FBFDFC]">
      {/* left  */}
      <div className="flex items-center gap-4">
        <button className="" onClick={() => dispatch(toggleSidebar())}>
          {theme === "dark" ? (
            <Image
              alt=""
              src={"/navbar/sidebarMenuWhite.png"}
              className=""
              width={18}
              height={18}
            />
          ) : (
            <Image
              alt=""
              src={"/navbar/sidebarMenuBlack.png"}
              className=""
              width={18}
              height={18}
            />
          )}
        </button>
        <div className="flex items-center gap-2">
          <Image alt="" src={"/navbar/logo.png"} width={32} height={32} />
          <span className="font-bold text-2xl text-[#3F9142]">DoIt</span>
        </div>
      </div>
      {/* right --------------------------- */}
      <div className="flex items-center gap-5">
        <button className="">
          {theme === "dark" ? (
            <Image
              alt=""
              src={"/navbar/searchWhite.png"}
              className=""
              width={18}
              height={18}
            />
          ) : (
            <Image
              alt=""
              src={"/navbar/searchBlack.png"}
              className=""
              width={18}
              height={18}
            />
          )}
        </button>
        {/* list style ===================================== */}
        <button className="" onClick={() => dispatch(toggleListStyle())}>
          {theme === "dark" ? (
            listStyle === "list" ? (
              <Image
                alt=""
                src={"/navbar/appGridWhite.png"}
                className=""
                width={18}
                height={18}
              />
            ) : (
              <Image
                alt=""
                src={"/navbar/appListWhite.png"}
                className=""
                width={18}
                height={18}
              />
            )
          ) : listStyle === "list" ? (
            <Image
              alt=""
              src={"/navbar/appGridBlack.png"}
              className=""
              width={18}
              height={18}
            />
          ) : (
            <Image
              alt=""
              src={"/navbar/appListBlack.png"}
              className=""
              width={18}
              height={18}
            />
          )}
        </button>
        {/* dark/light mode ====================== */}
        <ThemeSwitcher />
        {/* <button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className=""
        >
          {theme === "dark" ? (
            <Image
              src={"/navbar/sun.png"}
              className=""
              width={18}
              height={18}
            />
          ) : (
            <Image
              src={"/navbar/moon.png"}
              className=""
              width={18}
              height={18}
            />
          )}
        </button> */}
      </div>
    </div>
  );
};

export default NavBar;
