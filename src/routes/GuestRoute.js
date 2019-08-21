import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = !!localStorage.getItem("token");

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated ? (<Component {...props} />) : (<Redirect to="/dashboard" />)} />
);

export default GuestRoute;