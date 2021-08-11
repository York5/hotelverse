import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPropertyPage from "../Pages/AddPropertyPage";
import DetailPage from "../Pages/DetailPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/listing" component={ListingPage} />
        <Route exact path="/details/:id" component={DetailPage} />
        <Route exact path="/add" component={AddPropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
