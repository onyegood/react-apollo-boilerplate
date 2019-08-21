import React from "react";
import Layout from "../../layout";
import CountCard from "../../component/cards/count";

const ConfigurationPage = () => {
  return (
    <Layout>
      <div className="row mb-4">
        <CountCard
          title="Users"
          count={null}
          link_to={`/config/users`}
        />
        <CountCard
          title="Companies"
          count={null}
          link_to={`/config/companies`}
        />
        <CountCard
          title="Competency"
          count={null}
          link_to={`/config/competency`}
        />
        <CountCard
          title="Attendance"
          count={null}
          link_to={`/config/attendance`}
        />
      </div>
    </Layout>
  );
};

export default ConfigurationPage;