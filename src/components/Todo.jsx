"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./navbar/NavBar";
import Container from "./container/Container";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "@/redux/slices/todos/todoSlice";
import LoginPage from "./LoginPage";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const [isInitialized, setIsInitialized] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [mounted, setMounted] = useState(false);

  // Load todos from localStorage on the first render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTodos = localStorage.getItem("myTodos");
      if (storedTodos) {
        dispatch(setTodos(JSON.parse(storedTodos)));
      }
      setIsInitialized(true); // Mark initialization as complete
    }
  }, [dispatch]);

  // Sync todos to localStorage only after the initial load
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("myTodos", JSON.stringify(todos));
    }
  }, [todos, isInitialized]);

  useEffect(() => {
    setMounted(true);
  }, []);
  // ==============================================
  if (!mounted) return;
  if (!isAuthenticated) return <LoginPage />;

  return (
    <div className="bg-[#FBFDFC] dark:bg-[#242424] min-h-screen">
      <div className="mx-10 h-full">
        <NavBar />
        <Container />
      </div>
    </div>
  );
};

export default Todo;
