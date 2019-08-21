import React from "react";
import { Link } from "react-router-dom";
import GenericTable from "../tables/GenericTable";
import SearchComponent from "../../../component/search";

const GenericCard = ({ data, page }) => {
  let param;
  if (page === "employee-type") {
    param = "Employee Type";
  } else if (page === "job-role") {
    param = "Job Role";
  } else if (page === "conduct") {
    param = "Code of Conduct";
  } else {
    param = page;
  }
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-nowrap text-capitalize">{param} Setup</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-capitalize">{param} Form here</h1>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <SearchComponent />
          <br />
          <GenericTable />
        </div>

      </div>
    </div>
  );
};

export default GenericCard;