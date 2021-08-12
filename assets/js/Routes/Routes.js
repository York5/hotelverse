import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";
import PropertyContextProvider from "./../contexts/PropertyContext";
import { URL_PATHS } from "./../helpers/consts";
import AddPropertyPage from "../Pages/AddPropertyPage";
import BookingsPage from "../Pages/BookingsPage";
import CheckoutPage from "../Pages/CheckoutPage";
import DetailPage from "../Pages/DetailPage";
import EditPropertyPage from "../Pages/EditPropertyPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";
import Page404 from "../Pages/Page404";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <PropertyContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path={URL_PATHS.PROPERTIES_LIST}
            component={ListingPage}
          />
          <Route
            exact
            path={`${URL_PATHS.PROPERTIES_DETAILS}/:id`}
            component={DetailPage}
          />
          <Route exact path={URL_PATHS.SIGN_IN} component={SignInPage} />
          <Route exact path={URL_PATHS.SIGN_UP} component={SignUpPage} />

          <ProtectedRoute exact path="/bookings" component={BookingsPage} />
          <ProtectedRoute
            exact
            path={URL_PATHS.PROPERTIES_CREATE}
            component={AddPropertyPage}
          />
          <ProtectedRoute
            exact
            path={`${URL_PATHS.PROPERTIES_EDIT}/:id`}
            component={EditPropertyPage}
          />
          <ProtectedRoute exact path="/checkout" component={CheckoutPage} />

          <Route component={Page404} />
        </Switch>
      </PropertyContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
