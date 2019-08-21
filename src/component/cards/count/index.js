import React from "react";
import { Link } from "react-router-dom";
import "./css/countStyle.css";
const CountCard = ({ title, count, link_to, class_name }) => {
  return (
    <div className={`${class_name}`}>
      <div className="card-style">
        <Link to={link_to}>
          <div className="card text-center">
            <div className="card-body">
              <h5>{title}</h5>
              <h1>{count}</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

CountCard.defaultProps = {
  title: "title",
  count: 0,
  link_to: "/dashboard",
  class_name: "col-md-3",
};
export default CountCard;