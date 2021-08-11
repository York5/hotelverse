import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropertyContextProvider from "../components/contexts/PropertyContext";
import AddPropertyPage from "../Pages/AddPropertyPage";
import DetailPage from "../Pages/DetailPage";
import EditPropertyPage from "../Pages/EditPropertyPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <PropertyContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/listing" component={ListingPage} />
          <Route exact path="/add" component={AddPropertyPage} />
          <Route exact path="/details/:id" component={DetailPage} />
          <Route exact path="/edit/:id" component={EditPropertyPage} />
        </Switch>
      </PropertyContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
