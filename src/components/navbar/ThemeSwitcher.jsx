"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // ==========================
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className=""
    >
      {theme === "dark" ? (
        <Image
          alt=""
          src={"/navbar/sun.png"}
          className=""
          width={18}
          height={18}
        />
      ) : (
        <Image
          alt=""
          src={"/navbar/moon.png"}
          className=""
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
