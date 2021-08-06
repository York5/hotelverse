import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import FeaturedBody from "../components/Featured/FeaturedBody";

const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={FeaturedBody} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
