import React from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
          <div class="login-right-form-email">
            <label for="login-email-id">Email</label>
            <input type="email" id="login-email-id" name="login-email"  placeholder="e.g. juandelacruz@gmail.com" required />
          </div>
          <div class="login-right-form-password">
            <label for="login-password-id">Password</label>
            <input type="password" id="login-password-id" name="login-password"  placeholder="Enter your password" required />
          </div>
        </div>

        <div className="login-right-options">
          <div className="login-right-options-remember">
            <input type="checkbox" id="remember-checkbox-id" name="remember-checkbox" required />
            <label for="remember-checkbox-id">Remember me</label>
          </div>
          
          <div className="login-right-options-forgot">
            <label for="forgot_password-id">
              <button type="button" id="forgot_password-id" name="forgot_password">Forgot Password?</button>
            </label>
          </div>
        </div>

        <div className="login-right-button">
          <label for="login-button-id">
            <button type="button" id="login-button-id" name="login-button">Log in</button>
          </label>
        </div>

        <div className="login-right-signup">
          <p className="login-right-signup-text">Don't have an account yet?</p>
          <label for="login-right-signup-button-id">
            <button type="button" id="login-right-signup-button-id" name="login-right-signup-button">Sign up</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
