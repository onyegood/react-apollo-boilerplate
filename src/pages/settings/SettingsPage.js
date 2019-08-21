import React from "react";
import Layout from "../../layout";
import CountCard from "../../component/cards/count";
import GenericCard from "./cards/GenericCard";
import CustomModal from "../../component/modal/CustomModal";

const SettingsPage = (props) => {
  const { key, company_id } = props.match.params;

  return (
    <Layout page="Settings">
      <div className="row mb-4">
        <CountCard
          title="Grade Setup"
          count={null}
          link_to={`/settings/${company_id}/grade`}
        />
        <CountCard
          title="Unit Setup"
          count={null}
          link_to={`/settings/${company_id}/unit`}
        />
        <CountCard
          title="Employee Types Setup"
          count={null}
          link_to={`/settings/${company_id}/employee-type`}
        />
        <CountCard
          title="Job Role Setup"
          count={null}
          link_to={`/settings/${company_id}/job-role`}
        />
      </div>
      <div className="row mb-4">
        <CountCard
          title="Designations Setup"
          count={null}
          link_to={`/settings/${company_id}/designation`}
        />
        <CountCard
          title="Culture Setup"
          count={null}
          link_to={`/settings/${company_id}/culture`}
        />
        <CountCard
          title="Code of Conduct Setup"
          count={null}
          link_to={`/settings/${company_id}/conduct`}
        />
        <CountCard
          title="Allowance Setup"
          count={null}
          link_to={`/settings/${company_id}/allowance`}
        />
      </div>
      <div className="row mb-4">
        <CountCard
          title="Deduction Setup"
          count={null}
          link_to={`/settings/${company_id}/deductions`}
        />
        <CountCard
          title="Office Setup"
          count={null}
          link_to={`/settings/${company_id}/office`}
        />
      </div>

      <GenericCard
        data={key}
        page={key}
      />
    </Layout>
  );
};

export default SettingsPage;