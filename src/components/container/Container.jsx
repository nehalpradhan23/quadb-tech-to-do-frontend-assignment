import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";
import { useSelector } from "react-redux";

const Container = () => {
  const isOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div className="h-screen pt-5 flex">
      {isOpen && <Sidebar />}
      <MainContent />
    </div>
  );
};

export default Container;
