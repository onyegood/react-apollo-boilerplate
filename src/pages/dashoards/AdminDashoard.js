import React from "react";
import Layout from "../../layout";
import CountCard from "../../component/cards/count";
import { graphql } from "react-apollo";
import { meQuery } from "../../graphql/queries/auth";

const AdminDashboard = ({ data: { me, loading } }) => {
  return (
    <Layout page="Dashboard">
      <div className="row">
        <CountCard
          title="Total Companies"
          count={20}
          link_to="/"
          class_name="col-md-3 mt-4"
        />

        <CountCard
          title="Total Offices"
          count={20}
          link_to="/"
          class_name="col-md-3 mt-4"
        />

        <CountCard
          title="Total Employees"
          count={20}
          link_to="/"
          class_name="col-md-3 mt-4"
        />

        <CountCard
          title="Total Users"
          count={20}
          link_to="/"
          class_name="col-md-3 mt-4"
        />
      </div>

      {loading || !me ? <p className="mt-4">loading...</p> : <h1 className="mt-4">Hi, {me.firstName + " " + me.lastName} </h1>}
    </Layout>
  );
};

export default graphql(meQuery)(AdminDashboard);