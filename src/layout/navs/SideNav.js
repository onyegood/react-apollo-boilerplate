import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/side-bar.css";
import history from "../../history";



const SideNav = () => {

  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/login");
    // window.location = "/login";
  };

  return (
    <>
      <div className="logo">
        <img src="/assets/img/logo.png" className="img-fluid" alt="Company Logo" />
        <p>Code4me Nigeria</p>
      </div>

      <ul className="sidebar-nav">
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <span onClick={() => logout()} className="nav-link cursor-pointer">
            Logout
          </span>
        </li>
      </ul>
    </>
  );
};

export default SideNav;