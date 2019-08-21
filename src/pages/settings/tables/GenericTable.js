import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../../../component/modal/CustomModal";

const GenericTable = ({ data }) => {
  const [open, setOpen] = useState(false);

  const onModaleClose = () => {
    setOpen(false);
  };
  const onModaleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CustomModal open={open} onModaleClose={onModaleClose}>
        <form>
          <label>Name</label>
          <input className="form-control" type="text" />
        </form>
      </CustomModal>
      <div className="table-responsive text-wrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Leve</th>
              <th scope="col">Company</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-light">
              <th scope="row">Light</th>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>
                <button className="btn-sm btn-success mr-3">
                  <i className="fa fa-edit" />
                </button>
                <button onClick={() => onModaleOpen()} className="btn-sm btn-danger">
                  <i className="ion-ios-close-circle-outline" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GenericTable;