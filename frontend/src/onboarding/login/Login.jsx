import React from 'react';
import './login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


const Login = () => {

  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left-top">
          <img src="" className="" alt="Concorde logo"></img>
        </div>
        <div className="login-left-bottom">
          <img src="" className="" alt="Big picture"></img>
        </div>
      </div>

      <div className="login-right">
        <div className="login-right-header">
          <p className="login-right-header-sub">Jump back in</p>
          <p className="login-right-header-main">Welcome back</p>
        </div>

        <div className="login-right-form">


          {/* login form */}
          <form id="login-form">
            <div className="login-right-form-email">
              <label htmlFor="login-email-id">Email</label>
              <input 
                type="email" 
                id="login-email-id" 
                name="login-email"  
                placeholder="e.g. juandelacruz@gmail.com" 
                required 
              />
            </div>
            <div className="login-right-form-password">
              <label htmlFor="login-password-id">Password</label>
              <input 
                type="password" 
                id="login-password-id" 
                name="login-password"  
                placeholder="Enter your password" 
                required 
              />
            </div>
          </form>
        </div>

        <div className="login-right-options">
          <div className="login-right-options-remember">
            <input 
              type="checkbox" 
              id="remember-checkbox-id" 
              name="remember-checkbox" 
              required 
            />
            <label htmlFor="remember-checkbox-id">Remember me</label>
          </div>
          
          <div className="login-right-options-forgot">
              <button 
                type="button" 
                id="forgot_password-id" 
                name="forgot_password"
                >
                Forgot Password?
                </button>
          </div>
        </div>

        <div className="login-right-button">
            <button 
              type="button" 
              id="login-submit-button-id" 
              name="login-button"
              >
              Log in
              </button>
        </div>

        <div className="login-right-signup">
          <p className="login-right-signup-text">Don't have an account yet?</p>
            <button id="signup-button">Sign up</button>


        </div>
      </div>
    </div>
  );
};

export default Login;
