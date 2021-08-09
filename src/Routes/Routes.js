import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import FeaturedBody from "../components/Featured/FeaturedBody";
import ListingBody from "../components/Listing /ListingBody";

const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={FeaturedBody} />
        <ListingBody exact path="/listing" component={ListingBody} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
