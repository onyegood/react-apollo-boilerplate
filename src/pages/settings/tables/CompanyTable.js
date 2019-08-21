import React from "react";
import { Link } from "react-router-dom";

const CompanyTable = (props) => {
  return (
    <div className="table-responsive text-nowrap mt-5 mb-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Industry</th>
            <th scope="col">Country</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row">Light</th>
            <th scope="row"></th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>
              <Link className="btn-sm btn-primary"
                to="/settings/67882367474">
                <i className="ion-ios-cog" /> Configure
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default CompanyTable;