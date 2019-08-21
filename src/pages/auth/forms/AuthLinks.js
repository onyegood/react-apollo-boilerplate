import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = ({ page }) => {
  let renderLinks = <>
    <Link to="/signup" className="mr-3">Signup</Link>
    <Link to="/forgot-password" className="mr-3">Forgot Password</Link>
  </>;

  if (page === "signup") {
    renderLinks = <>
      <Link to="/login" className="mr-3">Login</Link>
      <Link to="/forgot-password" className="mr-3">Forgot Password</Link>
    </>;
  } else if (page === "forgot-password") {
    renderLinks = <>
      <Link to="/login" className="mr-3">Login</Link>
      <Link to="/signup" className="mr-3">Signup</Link>
    </>;
  } else if (page === "reset-password") {
    renderLinks = <>
      <Link to="/login" className="mr-3">Login</Link>
      <Link to="/signup" className="mr-3">Signup</Link>
    </>;
  }

  return (
    <div className="form-group mb-5 mt-4 text-center">
      {renderLinks}
    </div>
  );
};

export default AuthLinks;