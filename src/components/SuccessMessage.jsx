import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessMessage.css';

const SuccessMessage = () => {
  const location = useLocation();
  const { email } = location.state || { email: '' };

  return (
    <div className="Success-Container">
      <div className="img_svg">
        <img src="assets/images/icon-success.svg" alt="success icon" />
      </div>
      <div className="Success-Content">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span><strong>{email}</strong></span>. 
          Please open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={() => window.location.reload()}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
