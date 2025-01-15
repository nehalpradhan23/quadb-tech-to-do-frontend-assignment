import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";
import { useSelector } from "react-redux";
import EditContainer from "./editContainer/EditContainer";

const Container = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const isContainerOpen = useSelector(
    (state) => state.editContainer.isSidebarOpen
  );
  return (
    <div className="h-screen pt-5 mx-auto flex gap-[6px]">
      {isSidebarOpen && <Sidebar />}
      <MainContent />
      {isContainerOpen && <EditContainer />}
    </div>
  );
};

export default Container;
