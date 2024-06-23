import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValid(true);
      navigate('/success', { state: { email } }); // Pass email via state
    } else {
      setIsValid(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true); // Reset validity on change
  };

  return (
    <div>
      <div className="form-container">
        <form className="form" id="form" onSubmit={handleSubmit}>
          <p>Email Address</p>
          <input
            id="email-input"
            type="text"
            className={`email-title ${isValid ? '' : 'invalid'}`}
            placeholder={isValid ? 'email@company.com' : 'Invalid email address'}
            value={email}
            onChange={handleEmailChange}
            style={{
              borderColor: isValid ? 'initial' : 'red',
            }}
          />
          <button id="proceed" className="procceed-btn">Subscribe to Monthly Newsletter</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
