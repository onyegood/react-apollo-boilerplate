
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./css/top-menu.css";
import { graphql } from "react-apollo";
import { meQuery } from "../../graphql/queries/auth";

const TopNav = ({ onClick, data: { me, loading } }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        onClick={() => onClick()}
        to="#">
        <i className="ion-ios-reorder toggle-icon" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto">
          <button to="/dashboard" className="btn-lg btn-tour">
            <b>Take a tour</b>
          </button>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <i className="ion-ios-notifications-outline icon-small" />
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link">
              <i className="ion-ios-mail icon-small" />
            </Link>
          </li>

          <li className="nav-item">
            {loading || !me ?
              <p className="nav-link">loading...</p>
              :
              <Link to="/profile" className="nav-link">
                <b>{me.firstName} </b> &nbsp;
                <img
                  src={me.profilePicture ? me.profilePicture : "/assets/img/avatar.jpeg"}
                  alt={me.firstName + " " + me.lastName}
                />
              </Link>
            }
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default graphql(meQuery)(TopNav);