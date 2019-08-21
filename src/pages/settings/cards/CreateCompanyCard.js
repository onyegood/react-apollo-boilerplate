import React from "react";
import { Link } from "react-router-dom";
import CompanyTable from "../tables/CompanyTable";
import CompanyForm from "../forms/CompanyForm";

const CreateCompanyCard = (props) => {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-nowrap mb-4">Create Company</h1>
            <hr />
            <CompanyForm />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <CompanyTable />
      </div>
    </>
  );
};

export default CreateCompanyCard;