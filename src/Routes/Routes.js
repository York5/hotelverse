import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default Routes;
