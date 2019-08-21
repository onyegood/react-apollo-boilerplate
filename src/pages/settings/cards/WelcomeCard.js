import React from "react";
import { Link } from "react-router-dom";

const WelcomeCard = (props) => {
  return (
    <div className="col-md-6 mx-auto d-block text-center">
      <h1>Welcome <b>Goodnews</b>, please setup your company workspace to processed.</h1>
      <Link to="/onboarding/create-company" className="btn btn-alt mt-4 mb-4 faa-vertical animated">
        Create Company
      </Link>
    </div>
  );
};

export default WelcomeCard;