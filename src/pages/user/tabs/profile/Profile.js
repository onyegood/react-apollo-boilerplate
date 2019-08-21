// eslint-disable-next-line no-unused-vars
import React from "react";
import { graphql } from "react-apollo";
import { meFullPayloadQuery } from "../../../../graphql/queries/auth";

const Profile = ({ data: { me, loading } }) => {
  return (
    <div className="tab-pane fade active show">
      <div className="card">
        <div className="card-body">
          <div className="row">
            {loading || !me ?
              <p className="ml-4">loading...</p>
              :
              <>
                <div className="col-md-2 animate-image">
                  <img
                    src={me.profilePicture ? me.profilePicture : "/assets/img/avatar.jpeg"}
                    alt={me.firstName + " " + me.lastName}
                    className="img-fluid rounded-circle mx-auto d-block"
                  />
                </div>
                <div className="col-md-6">
                  <h3>{me.firstName + " " + me.lastName}</h3>
                  <p><b>12B, Dele Akingboye Street, Ifako Gbagada Lagos.</b></p>
                  <h4>{me.phone}</h4>
                  <h4>{me.email}</h4>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-alt pull-right">
                    <i className="ion-md-create" /> Edit Profile
                  </button>
                </div>
              </>}
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h4>Password</h4>
              <h4>********</h4>
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-alt pull-right">
                <i className="ion-md-create" /> Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h4>Deactivate Account</h4>
              <h5>This will remove you from all team and disable your account</h5>
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-danger pull-right">
                <i className="ion-md-create" /> Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default graphql(meFullPayloadQuery)(Profile);