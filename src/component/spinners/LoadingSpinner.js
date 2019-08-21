import React from 'react';
import './css/LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
      <div className="loader-overlay">
        <div className="lds-ring">
        <div></div><div></div><div>
        </div><div></div></div>

        <p>loading...</p>
    </div>
  )
}

export default LoadingSpinner
