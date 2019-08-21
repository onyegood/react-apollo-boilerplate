import React from "react";
import "./css/Modal.css";

const CustomModal = (props) => {
  return (
    <div className={props.open ? "modal show-modal" : "modal hide-modal"}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={() => props.onModaleClose()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

CustomModal.defaultProps = {
  open: false
};
export default CustomModal;