import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";
import { useSelector } from "react-redux";
import EditContainer from "./editContainer/EditContainer";

const Container = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div className="h-screen pt-5 flex">
      {isSidebarOpen && <Sidebar />}
      <MainContent />
      <EditContainer />
    </div>
  );
};

export default Container;
