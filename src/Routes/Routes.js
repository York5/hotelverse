import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListingBody from "../components/Listing /ListingBody";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/listing" component={ListingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
