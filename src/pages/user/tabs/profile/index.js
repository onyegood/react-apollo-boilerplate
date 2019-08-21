import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import CompanyProfile from "./CompanyProfile";
import Billing from "./Billing";

const ProfileTab = (props) => {
  const [tab, setTab] = useState("profile");

  let renderTabs;

  if (tab === "profile") {
    renderTabs = <Profile />;
  } else if (tab === "company-profile") {
    renderTabs = <CompanyProfile />;
  } else if (tab === "billing") {
    renderTabs = <Billing />;
  }

  return (
    <>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <Link
            onClick={() => setTab("profile")}
            to="#"
            className={tab === "profile" ? "nav-link active" : "nav-link"}>
            <b>Profile</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => setTab("company-profile")}
            to="#"
            className={tab === "company-profile" ? "nav-link active" : "nav-link"}>
            <b>Company Profile</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={() => setTab("billing")}
            to="#"
            className={tab === "billing" ? "nav-link active" : "nav-link"}>
            <b>Billing</b>
          </Link>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        {renderTabs}
      </div>
    </>
  );
};

export default ProfileTab;