import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Main/Home";
import Sidebar from "../components/Sidebar/Sidebar";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
