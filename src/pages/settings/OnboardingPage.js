import React from "react";
import Layout from "../../layout";
import { Link } from "react-router-dom";
import WelcomeCard from "./cards/WelcomeCard";
import CreateOfficeCard from "./cards/CreateOfficeCard";
import CreateCompanyCard from "./cards/CreateCompanyCard";

const OnboardingPage = (props) => {
  const { key, id } = props.match.params;

  let renderWiew;

  if (key && !id) {
    renderWiew = <CreateCompanyCard />;
  } else if (id) {
    renderWiew = <CreateOfficeCard />;
  } else {
    renderWiew = <WelcomeCard />;
  }



  return (
    <Layout>
      <div className="row">
        {renderWiew}
      </div>
    </Layout>
  );
};

export default OnboardingPage;