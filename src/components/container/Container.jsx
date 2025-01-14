import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";

const Container = () => {
  return (
    <div className="h-screen pt-5 flex">
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
};

export default Container;
