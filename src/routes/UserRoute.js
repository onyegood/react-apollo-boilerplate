import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = !!localStorage.getItem("token");

const UserRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated ? <Component {...props} /> : <Redirect to="/" />} />
);

export default UserRoute;