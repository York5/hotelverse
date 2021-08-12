import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import NotificationsBar from "../components/Utils/NotificationsBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      {children}
      <NotificationsBar />
    </>
  );
};

export default MainLayout;
