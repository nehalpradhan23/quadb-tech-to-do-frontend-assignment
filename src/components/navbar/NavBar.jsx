"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className="flex justify-between py-3 dark:bg-[#242424] bg-[#FBFDFC]">
      {/* left  */}
      <div className="flex items-center gap-4">
        <button className="">
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
          <Image src={"/navbar/logo.png"} width={32} height={32} />
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
        <button className="">
          {theme === "dark" ? (
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
              src={"/navbar/appGridBlack.png"}
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
