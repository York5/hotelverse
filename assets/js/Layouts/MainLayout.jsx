import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
