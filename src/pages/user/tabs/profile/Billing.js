import React from "react";

const Billing = () => {
  return (
    <div className="tab-pane fade active show">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="/assets/img/logo-blue.png"
                className="img-fluid rounded-circle mx-auto d-block"
                alt="Ofoegbu Goodnews" />
            </div>
            <div className="col-md-6">
              <h3>Code4me Nigeria</h3>
              <p><b>12B, Dele Akingboye Street, Ifako Gbagada Lagos.</b></p>
              <h4>07031002066</h4>
              <h4>info@code4me.com</h4>
            </div>
            <div className="col-md-4">
              <button className="btn btn-alt pull-right">
                <i className="ion-md-create" /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;