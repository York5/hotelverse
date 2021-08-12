import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";
import PropertyContextProvider from "../components/contexts/PropertyContext";
import { URL_PATHS } from "../components/helpers/consts";
import Page404 from "../components/Page404/Page404";
import AddPropertyPage from "../Pages/AddPropertyPage";
import BookingsPage from "../Pages/BookingsPage";
import CheckoutPage from "../Pages/CheckoutPage";
import DetailPage from "../Pages/DetailPage";
import EditPropertyPage from "../Pages/EditPropertyPage";
import HomePage from "../Pages/HomePage";
import ListingPage from "../Pages/ListingPage";
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
          <Route exact path="/listing" component={ListingPage} />
          <Route exact path="/add" component={AddPropertyPage} />
          <Route exact path="/details/:id" component={DetailPage} />
          <Route exact path="/edit/:id" component={EditPropertyPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route exact path={URL_PATHS.SIGN_IN} component={SignInPage} />
          <Route exact path={URL_PATHS.SIGN_UP} component={SignUpPage} />
          <ProtectedRoute exact path="/bookings" component={BookingsPage} />
          <Route exact path="/test" component={Page404} />
        </Switch>
      </PropertyContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
