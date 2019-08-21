import React from "react";
import "./css/ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="product-card">
          <div className="card">
            <h4 className="cat-flag">5000</h4>
            <div className="card-img image-ratio">
              <div className="ratio-inner">
                <img src="/assets/img/inventory.jpg" alt="food" />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="title"><i className="ion-ios-create" /> Product One</h3>
                <p className="description text-wrap">Effective inventory management is an integral part of any home furnishings retailer’s success. STORIS enables your business to gain better control of your inventory</p>
                <div className="text-center mt-2">
                  <button className="btn-sm btn-tour mr-3">View Detail</button>
                  <button className="btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="product-card">
          <div className="card">
            <h4 className="cat-flag">2000</h4>
            <div className="card-img image-ratio">
              <div className="ratio-inner">
                <img src="/assets/img/payroll.jpg" alt="food" />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="title"><i className="ion-ios-cash" /> Product Two</h3>
                <p className="description text-wrap">Effective inventory management is an integral part of any home furnishings retailer’s success. STORIS enables your business to gain better control of your inventory</p>
                <div className="text-center mt-2">
                  <button className="btn-sm btn-tour mr-3">View Detail</button>
                  <button className="btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="product-card">
          <div className="card">
            <h4 className="cat-flag">3000</h4>
            <div className="card-img image-ratio">
              <div className="ratio-inner">
                <img src="/assets/img/procurement-cycle.jpeg" alt="food" />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="title"><i className="ion-ios-cart" /> Product three</h3>
                <p className="description text-wrap">Effective inventory management is an integral part of any home furnishings retailer’s success. STORIS enables your business to gain better control of your inventory</p>
                <div className="text-center mt-2">
                  <button className="btn-sm btn-tour mr-3">View Detail</button>
                  <button className="btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="product-card">
          <div className="card">
            <h4 className="cat-flag">7300</h4>
            <div className="card-img image-ratio">
              <div className="ratio-inner">
                <img src="/assets/img/surveys.png" className="img-fluid" alt="food" />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="title"><i className="ion-ios-today" /> Product Four</h3>
                <p className="description text-wrap">Effective inventory management is an integral part of any home furnishings retailer’s success. STORIS enables your business to gain better control of your inventory</p>
                <div className="text-center mt-2">
                  <button className="btn-sm btn-tour mr-3">View Detail</button>
                  <button className="btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="product-card">
          <div className="card">
            <h4 className="cat-flag">6000</h4>
            <div className="card-img image-ratio">
              <div className="ratio-inner">
                <img src="/assets/img/attendancesystem.png" alt="food" />
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <h3 className="title"><i className="ion-ios-alarm" /> Product Six</h3>
                <p className="description text-wrap">Effective inventory management is an integral part of any home furnishings retailer’s success. STORIS enables your business to gain better control of your inventory</p>
                <div className="text-center mt-2">
                  <button className="btn-sm btn-tour mr-3">View Detail</button>
                  <button className="btn-sm btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
