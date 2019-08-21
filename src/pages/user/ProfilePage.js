import React from "react";
import Layout from "../../layout";
import ProfileTab from "./tabs/profile";

const ProfilePage = () => {

  return (
    <Layout page="Account">
      <ProfileTab />
    </Layout>
  );
};

export default ProfilePage;