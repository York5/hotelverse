import React from "react";
import NotificationsBar from "../components/Utils/NotificationsBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      {children}
      <NotificationsBar />
    </>
  );
};

export default AuthLayout;
