import React from 'react';
import './registration.css';
import user_square from "../../assets/icons/user_square.png";
import calendar_week from "../../assets/icons/calendar_week.png";

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration-header">
      <div className="registration-header-padding">
        <p className="registration-header-heading">You're almost there!</p>
        <p className="registration-header-sub">Just one more step</p>
      </div> {/* registration-header-padding */}
      </div> {/* registration-header */}

      <div className="registration-container">
      <div className="registration-container-padding">
         
        <div className="registration-container-header">
          <p className="registration-container-header-sub">Tell us more about yourself</p>
          <p className="registration-container-header-heading">Complete your profile</p>
        </div> {/* registration-container-header */}

        <div className="registration-container-column">
          <form className="registration-container-column-form">
            <div className="registration-container-column-form-address">
              <div className="registration-container-column-form-address-header">
                <img src={calendar_week} className="" alt="calendar_week icon" />
                <p className="registration-container-column-form-address-header-text">Home address</p>
              </div> {/* registration-container-column-form-address-header */}
              
              <div className="registration-container-column-form-address-content">
                <div className="registration-container-column-form-address-content-left">
                  <div className="registration-container-column-form-address-content-left-alike">
                    <label htmlFor="">Region</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your region" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-left-alike */}

                  <div className="registration-container-column-form-address-content-left-alike">
                    <label htmlFor="">Barangay</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your barangay" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-left-alike */}

                  <div className="registration-container-column-form-address-content-left-alike">
                    <label htmlFor="">Street</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your street" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-left-alike */}

                </div> {/* registration-container-column-form-address-content-left */}

                <div className="registration-container-column-form-address-content-right">
                  <div className="registration-container-column-form-address-content-right-alike">
                    <label htmlFor="">City</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your city" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-right-alike */}

                  <div className="registration-container-column-form-address-content-right-alike">
                    <label htmlFor="">Zip code</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your zip code" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-right-alike */}

                  <div className="registration-container-column-form-address-content-right-alike">
                    <label htmlFor="">Building number</label>
                      <input 
                        type="text" 
                        id="" 
                        name=""  
                        placeholder="Enter your building number" 
                        required 
                      />  
                  </div> {/* registration-container-column-form-address-content-right-alike */}

                </div> {/* registration-container-column-form-address-content-right */}
              </div> {/* registration-container-column-form-address-content */}
            </div> {/* registration-container-column-form-address */}

            <div className="registration-container-column-form-personal">
              <div className="registration-container-column-form-personal-header">
                <img src={user_square} alt="user_square icon" />
                <p className="registration-container-column-form-personal-header-text">Personal details</p>
              </div> {/* registration-container-column-form-personal-header */}
              <div className="registration-container-column-form-personal-content">
                <div className="registration-container-column-form-personal-content-top">
                  <label htmlFor="">Birthday</label>
                    <input 
                      type="date" 
                      id="" 
                      name=""  
                      placeholder="" 
                      required 
                    />  
                </div> {/* registration-container-column-form-personal-content-top */}

                <div className="registration-container-column-form-personal-content-bottom">
                  <div className="registration-container-column-form-personal-content-bottom-left">
                    <div className="registration-container-column-form-personal-content-bottom-left-alike">
                      <label htmlFor="">Position</label>
                        <input 
                          type="text" 
                          id="" 
                          name=""  
                          placeholder="Enter your dropdown" 
                          required 
                        /> 
                    </div> {/* registration-container-column-form-personal-content-bottom-left-alike */}

                    <div className="registration-container-column-form-personal-content-bottom-left-alike">
                      <label htmlFor="">Gender</label>
                        <input 
                          type="text" 
                          id="" 
                          name=""  
                          placeholder="Enter your dropdown" 
                          required 
                        /> 
                    </div> {/* registration-container-column-form-personal-content-bottom-left-alike */}
                  </div> {/* registration-container-column-form-personal-content-bottom-left */}
                  
                  <div className="registration-container-column-form-personal-content-bottom-right">
                    <div className="registration-container-column-form-personal-content-bottom-right-alike">
                      <label htmlFor="">Position</label>
                        <input 
                          type="text" 
                          id="" 
                          name=""  
                          placeholder="Enter your dropdown" 
                          required 
                        /> 
                    </div> {/* registration-container-column-form-personal-content-bottom-right-alike */}

                    <div className="registration-container-column-form-personal-content-bottom-right-alike">
                      <label htmlFor="">Civil status</label>
                        <input 
                          type="text" 
                          id="" 
                          name=""  
                          placeholder="Enter your dropdown" 
                          required 
                        /> 
                    </div> {/* registration-container-column-form-personal-content-bottom-right-alike */}
                  </div> {/* registration-container-column-form-personal-content-bottom-right */}
                </div> {/* registration-container-column-form-personal-content-bottom */}
              </div> {/* registration-container-column-form-personal-content */}
            </div> {/* registration-container-column-form-personal */}
          </form> {/* registration-container-column-form */}
        </div> {/* registration-container-column */}

        <div className="registration-container-submit">
          <button
            type="button" 
            id="" 
            name=""
          >
          Register now
          </button>
        </div> {/* registration-container-submit */}
      </div> {/* registration-container-padding */}
      </div> {/* registration-container */}
    </div>
  );
};

export default Registration;
