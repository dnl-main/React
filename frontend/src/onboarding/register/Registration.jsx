import React from 'react';
import './registration.css';

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration-header">
        <p className="registration-header-heading">You're almost there!</p>
        <p className="registration-header-sub">Just one more step</p>
      </div>

      <div className="registration-container">
        <div className="registration-container-header">
          <p className="registration-container-header-sub">Tell us more about yourself</p>
          <p className="registration-container-header-heading">Complete your profile</p>
        </div>

        <div className="registration-container-content">
          <form id="registration-submit-button-id" action="">

            <div className="registration-container-content-column-address">
              <div className="registration-container-content-column-address-header">
                <img src="" className="" alt="address icon" />
                <p className="registration-container-content-column-address-header-text">Home address</p>
              </div>
              <div className="registration-container-content-column-address-left">
                <label>Region</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  />
                  <label>Barangay</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  /> 
                  <label>Street</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  />
              </div>
              <div className="registration-container-content-column-address-right">
                  <label>City</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  />
                  <label>Zip code</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  /> 
                  <label>Building no.</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    required
                  />
              </div>
            </div>

            <div className="registration-container-content-column-personal"> 
              <div className="registration-container-content-column-personal-header">
                <img src="" className="" alt="details icon" />
                <p className="registration-container-content-column-personal-header-text">Personal details</p>
              </div>

              <div className="registration-container-content-column-personal-top">
                <label>Birthday</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  /> 
                
              </div>
              
              <div className="registration-container-content-column-personal-left">
                <label>Position</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  /> 

                <label>Gender</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  /> 
              </div>

              <div className="registration-container-content-column-personal-right">
                <label>Second</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  /> 
                <label>Civil status</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  /> 
              </div>

            </div>

          </form>

        </div>

        <div className="registration-container-button">
          <button 
              type="submit" 
              id="" 
              name="">
              Register now
          </button>
        </div>


      </div>
    </div>
  );
};

export default Registration;
