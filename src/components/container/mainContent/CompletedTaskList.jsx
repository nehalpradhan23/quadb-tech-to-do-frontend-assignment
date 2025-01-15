"use client";

import { addTodoToView } from "@/redux/slices/editContainer/editContainerContentSlice";
import { toggleEditContainer } from "@/redux/slices/editContainer/editContainerSlice";
import {
  toggleTodoComplete,
  toggleTodoStarred,
} from "@/redux/slices/todos/todoSlice";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const data = ["data", "data", "data", "data"];
const CompletedTaskList = () => {
  const { theme } = useTheme();
  const todoList = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  const completedTodos = todoList.filter((todo) => todo.completed);
  const isContainerOpen = useSelector(
    (state) => state.editContainer.isSidebarOpen
  );

  const handleTaskClick = (item) => {
    // console.log("item", item);
    if (isContainerOpen) {
      dispatch(addTodoToView(item));
      return;
    }
    dispatch(toggleEditContainer());
    dispatch(addTodoToView(item));
  };

  // =======================================================
  return (
    <div className="py-[25px]">
      <span className="h-[20px] font-[400px] text-[15px] leading-5">
        Completed
      </span>
      <div className="py-[25px]">
        {completedTodos.map((item) => (
          <div
            onClick={() => handleTaskClick(item)}
            key={item.id}
            className={`h-[80px] py-4 flex items-center justify-between border-t-[1.5px] pr-8 ${
              theme === "dark" ? "border-white/20" : ""
            }`}
          >
            <div className="w-[365px] h-12 flex items-center">
              <div
                className="p-[11px] h-10 w-10 flex items-center justify-center"
                onClick={() => dispatch(toggleTodoComplete(item.id))}
              >
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
                {item.text}
              </span>
            </div>
            {/* star button =============================== */}
            <div
              className=""
              onClick={() => dispatch(toggleTodoStarred(item?.id))}
            >
              {theme === "dark" ? (
                item?.isStarred ? (
                  <Image
                    alt=""
                    src="/tasks/starFillWhite.png"
                    className="cursor-pointer"
                    height={24}
                    width={24}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/tasks/starWhite.png"
                    className="cursor-pointer"
                    height={24}
                    width={24}
                  />
                )
              ) : item?.isStarred ? (
                <Image
                  alt=""
                  src="/tasks/starFillBlack.png"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskList;
