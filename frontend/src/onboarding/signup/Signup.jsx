import React from 'react';
import './signup.css';
import concorde from '../../assets/logo/concorde.png';
import signup_auth from '../../assets/overlay/signup_auth.png';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-left">
      <div className="signup-left-padding"> 
        <div className="signup-left-top">
          <img src={concorde} className="" alt="Concorde logo" />
        </div> {/* signup-left-top */}
        <div className="signup-left-bottom">
          <img src={signup_auth} className="" alt="big picture" />
        </div> {/* signup-left-top */}
      </div> {/* signup-left-padding */}
      </div> {/* signup-left */}

      <div className="signup-right">
      <div className="signup-right-padding">

        <div className="signup-right-header">
          <p className="signup-right-header-sub">Start for free</p>
          <p className="signup-right-header-main">Create an account</p>
        </div> {/* signup-right */}

        
        <form className="signup-right-form">
          <div className="signup-right-form-name">
            <label>Full name</label>
              <input
                type="text"
                name="signup-right-form-name"
                id="signup-right-form-name-id"
                placeholder="Enter your full name" 
                required
              />
          </div>
          <div className="signup-right-form-email">
            <label> Email address</label>
              <input
                type="email"
                name="signup-right-form-email"
                id="signup-right-form-email-id"
                placeholder="Enter your email address" 
                required
              />
          </div>
          <div className="signup-right-form-mobile">
            <label>Mobile number</label>
              <input
                type="text"
                name="signup-right-form-mobile"
                id="signup-right-form-mobile-id"
                placeholder="Enter your mobile number" 
                required
              />
          </div>
          <div className="signup-right-form-password">
          <label>Password</label>
            <input
              type="password"
              name="signup-right-form-password"
              id="signup-right-form-password-id"
              placeholder="Enter your password" 
              required
            />
          </div>
        </form> {/* signup-right-form */}
        
        <div className="signup-right-terms">
          <div className="signup-right-terms-checkbox">
            <input 
              type="checkbox" 
              id="signup-right-terms-checkbox-id" 
              name="signup-right-terms-checkbox" 
              required 
            />
            <label htmlFor="signup-right-terms-checkbox-id">By signing up I agree with &nbsp;</label>
          </div> {/* signup-right-terms-checkbox */}

          <div className="signup-right-terms-content">
            <button 
              type="button" 
              id="signup-right-terms-content-id"
              name="signup-right-terms-content">
              Terms and Conditions
              <span style={{ fontWeight: "var(--font-weight-medium)", color: "var(--red-indicator)" }}>*
              </span>
            </button>
          </div> {/* signup-right-terms-content */}
        </div> {/* signup-right-terms */}

        <div className="signup-right-button">
          <button 
            type="button" 
            form="signup-submit-button-id" 
            name="signup-right-button">
            Sign Up
          </button>
        </div> {/* signup-right-button */}

        <div className="signup-right-spacer"></div>

        <div className="signup-right-login">
          <p className="signup-right-login-text">Already have an account? &nbsp;</p>
          <button className="signup-right-login-button">Log in</button>
        </div> {/* signup-right-login */}
      </div> {/* signup-right-padding */}
      </div> {/* signup-right */}
    </div>
  );
};

export default Signup;