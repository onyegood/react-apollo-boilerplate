import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../pages/dashoards/AdminDashoard";
import ProfilePage from "../pages/user/ProfilePage";
import SettingsPage from "../pages/settings/SettingsPage";
import OnboardingPage from "../pages/settings/OnboardingPage";
import ConfigurationPage from "../pages/settings/ConfigurationPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import ProductsPage from "../pages/products/ProductsPage";
import CheckToken from "../pages/auth/CheckToken";

export default () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={CheckToken} />
        <Route path={["/admin/dashboard", "/dashboard"]} exact component={AdminDashboard} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path={["/settings", "/settings/:company_id", "/settings/:company_id/:key"]} exact component={SettingsPage} />
        <Route path={["/onboarding", "/onboarding/:key", "/onboarding/:key/:company_id"]} exact component={OnboardingPage} />
        <Route path={["/config", "/config/:key", "/config/:key/:id"]} exact component={ConfigurationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/forgot-password" exact component={ForgotPasswordPage} />
        <Route path="/reset-password/:token" exact component={ResetPasswordPage} />
      </Switch>
    </>
  );
};
