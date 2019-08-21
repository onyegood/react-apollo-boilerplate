import React, { useState } from "react";
import TopNav from "./navs/TopNav";
import SideNav from "./navs/SideNav";

const Layout = (props) => {

  const [toggle, setToggle] = useState("");

  const doToggle = () => {
    if (toggle) {
      setToggle("");
    } else {
      setToggle("menuDisplayed");
    }
  };

  return (
    <div id="wrapper" className={toggle}>
      <div id="sidebar-wrapper">
        <SideNav />
      </div>
      <div id="page-content-wrapper">
        <div id="top-menu-wrapper">
          <TopNav
            onClick={() => doToggle()}
          />
        </div>

        <div className="container-fluid main-content">
          <div className="row mt-4 mb-4">
            <div className="col-lg-4">
              <h1>{props.page}</h1>
              {props.page ? <p>Today is -15, August 2019</p> : null}
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;