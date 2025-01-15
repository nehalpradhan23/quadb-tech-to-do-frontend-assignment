"use client";
import { addTodo } from "@/redux/slices/todos/todoSlice";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { IoRepeat } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const handleAddTodo = () => {
    if (todo.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(
      addTodo({
        id: Date.now(),
        text: todo,
        completed: false,
        isStarred: false,
      })
    );
    setTodo("");
  };
  // ===================================
  return (
    // <div className="flex h-[178px] bg-gradient-to-b">
    <div className="flex h-[178px] relative">
      <div
        className={`absolute h-full w-full ${
          theme === "dark"
            ? "bg-[#2F3630]"
            : "opacity-10 bg-gradient-to-b to-[#357937] from-[#d0ffd2]"
        }`}
      ></div>
      {/* ================ */}
      <div className="w-full text-black flex px-5 py-5 z-10">
        <div className="flex flex-1 flex-col">
          <div className="flex-1 flex items-center justify-center relative">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className={`w-[74px] h-[20px] font-[400] leading-5 text-[15px] bg-transparent flex-1 outline-none ${
                theme === "dark"
                  ? "placeholder-[#F5F5F5] text-white"
                  : "placeholder-[#1B281B]"
              }`}
              placeholder="Add A Task"
            />
            {error && (
              <p className="absolute text-red-500 left-0 bottom-5">
                !Cannot be empty
              </p>
            )}
          </div>
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
            <button
              onClick={handleAddTodo}
              className="px-4 py-2 text-[15px] leading-5 font-[500] rounded-lg w-[104px] h-9 text-[#CFCFCF] bg-[#357937]/85"
            >
              ADD TASK
            </button>
          ) : (
            <button
              onClick={handleAddTodo}
              className="px-4 py-2 text-[15px] leading-5 font-[500] rounded-lg w-[104px] h-9 text-[#2D6930] bg-[#357937]/15"
            >
              ADD TASK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
