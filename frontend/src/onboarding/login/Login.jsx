import React from 'react';
import './login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import concorde from '../../assets/logo/concorde.png';
import login_sailor from '../../assets/overlay/login_sailor.png';


const Login = () => {

  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left-top">
          <img src={concorde} className="" alt="Concorde logo"></img>
        </div> {/* login-left-top */}
        <div className="login-left-bottom">
          <img src={login_sailor} className="" alt="Big picture"></img>
        </div> {/* login-left-bottom */}
      </div> {/* login-left */}
      
      <div className="login-right">
      <div className="login-right-padding">
        <div className="login-right-header">
          <p className="login-right-header-sub">Jump back in</p>
          <p className="login-right-header-heading">Welcome back</p>
        </div> {/* login-right-header */}
        


        <div className="login-right-form"> 
          <form id="login-form" className="login-right-form-form">
            <div className="login-right-form-email">
              <label htmlFor="login-email-id">Email</label>
              <input 
                type="email" 
                id="login-email-id" 
                name="login-email"  
                placeholder="E.g. juandelacruz@gmail.com" 
                required 
              />    
            </div> {/* login-right-form-email */}
            <div className="login-right-form-password">
              <label htmlFor="login-password-id">Password</label>
              <input 
                type="password" 
                id="login-password-id" 
                name="login-password"  
                placeholder="Enter your password" 
                required 
              />
            </div> {/* login-right-form-password */}
          </form> {/* login-form */}
        </div> {/* login-right-form */}

        <div className="login-right-options">
          <div className="login-right-options-remember">
            <input 
              type="checkbox" 
              id="remember-checkbox-id" 
              name="remember-checkbox" 
              required 
            />
            <label htmlFor="remember-checkbox-id">Remember me</label>
          </div> {/* login-right-options-remember */}
          
          <div className="login-right-options-forgot">
              <button 
                type="button" 
                id="forgot_password-id" 
                name="forgot_password"
                >
                Forgot Password?
                </button>
          </div> {/* login-right-options-forgot */}
        </div> {/* login-right-options */}

        <div className="login-right-button">
            <button 
              type="button" 
              id="login-submit-button-id" 
              name="login-button"
              >
              Log in
              </button>
        </div> {/* login-right-button */}

        <div className="login-right-spacer"></div> {/* login-right-spacer */}

        <div className="login-right-signup">
          <p className="login-right-signup-text">Don't have an account yet?&nbsp; </p>
          <button id="signup-button"> Sign up</button>
        </div> {/* login-right-signup */}
      </div> {/* login-right-padding */} 
      </div> {/* login-right */}
    </div>
  );
};

export default Login;
