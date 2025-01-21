import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';  // Import Link for navigation
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Handle form input change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send the form data to the PHP API using axios
      const response = await axios.post(
        'http://localhost/Concorde/backend/index.php', 
        formData // Send all form data
      );

      // Handle success or error response
      if (response.data.status === 1) {
        setMessage(response.data.message); // Set the success message
      } else {
        setMessage(response.data.message); // Set the failure message
      }
    } catch (error) {
      // Handle error response
      setMessage('An error occurred while saving the data.');
      console.error(error);
    }
  };



  // Check if the email ends with @friendmar.com.ph
  const isFriendmarEmail = formData.email.endsWith('@friendmar.com.ph');

  return (
    <div className="signup">
      <div className="signup-left">
        <div className="signup-left-top">
          <img src="" className="" alt="Concorde logo" />
        </div>
        <div className="signup-left-bottom">
          <img src="" className="" alt="big picture" />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-right-header">
          <p className="signup-right-header-sub">Start for free</p>
          <p className="signup-right-header-main">Create an account</p>
        </div>

        <div className="signup-right-form">
          <form id="signup-submit-button-id" onSubmit={handleSubmit} >
            <label>
              Name:
              <input
                type="text"
                name="signup-right-form-name"
                id="signup-right-form-name-id"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="signup-right-form-email"
                id="signup-right-form-email-id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Mobile:
              <input
                type="text"
                name="signup-right-form-mobile"
                id="signup-right-form-mobile-id"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="signup-right-form-password"
                id="signup-right-form-password-id"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            
            <p>{message}</p>
          </form>
        </div>

        <div className="signup-right-terms">
          <div className="signup-right-terms-checkbox">
            <input type="checkbox" id="signup-right-terms-checkbox-id" name="signup-right-terms-checkbox" required />
            <label htmlFor="signup-right-terms-checkbox-id">By signing up I agree with</label>
          </div>
          <div className="signup-right-terms-content">
            <label htmlFor="signup-right-terms-content-id">
              <button type="button" id="signup-right-terms-content-id" name="signup-right-terms-content">Terms and Conditions</button>
            </label>
          </div>
          <p className="signup-right-terms-asterisk">*</p>
        </div>

        <div className="signup-right-button">
          <label htmlFor="signup-right-button-id">
            <button 
              type="button" 
              form="signup-submit-button-id"
              id="signup-right-button-id" 
              name="signup-right-button">
              Sign Up
            </button>
          </label>
        </div>

        <div className="signup-right-login">
          <p className="signup-right-login-text">Don't have an account yet?</p>
          <label htmlFor="signup-right-login-button-id">
            <button type="button" id="signup-right-login-button-id" name="signup-right-login-button">Sign up</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signup;