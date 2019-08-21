import React from 'react'
import Moment from 'react-moment';
const Breadcrumb = (props) => {
  return (
    <>
      <h5><strong>Home{props.path !== '/' ? props.path : null}</strong></h5>
      <p className="small">Today is -
        <Moment format="DD, MMMM YYYY">{Date.now()}</Moment>
      </p>
    </>
  );
};

export default Breadcrumb;