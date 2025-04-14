import React from 'react';
import './homeUser.css';

import { Navbar } from '../../admin/navbar/Navbar';
import Sidebar from '../../admin/sidebar/Sidebar';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Clock from '../../assets/icons/Clock.svg?react';


const HomeUser = () => {
  return (
  <div className="homeUser">
    <Navbar />
    <Sidebar />
    <div className="homeUser-box">
    <main className="homeUser-box-in">
      <div className="homeUser-top">
        <div className="homeUser-top-header">
          <div className="homeUser-top-header-left">
            <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
            <header>Home</header>
          </div> {/* homeUser-top-header-left */}

          <div className="homeUser-top-header-right">
            <div className="homeUser-top-header-right-status">
              <main className="homeUser-top-header-right-status-in">
                <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                <p>Available</p>
              </main> {/* homeUser-top-header-right-status-in */}
            </div> {/* homeUser-top-header-right-status */}

            <button className="homeUser-top-header-right-btn">
              <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
            </button> {/* homeUser-top-header-right-btn */}
          </div> {/* homeUser-top-header-right */}
        </div> {/* homeUser-top-header */}
        
        <div className="homeUser-top-core">
          <div className="homeUser-top-core-left">

            <div className="homeUser-top-core-left-header">
              <header>Scheduled appointment</header>
              <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
            </div> {/* homeUser-top-core-left-header */}

            <div className="homeUser-top-core-left-heading">
              <p>You have an apppointment</p>
            </div> {/* homeUser-top-core-left-heading */}

            <div className="homeUser-top-core-left-date">
              <div className="homeUser-top-core-left-date-cal">
                <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                <p>DEC</p>
                <p>28</p>
              </div> {/* homeUser-top-core-left-date-cal */}

              <div className="homeUser-top-core-left-date-data">
                <div className="homeUser-top-core-left-date-data-text">
                  <p className="homeUser-top-core-left-date-data-text-regular">December 28, 2025</p>
                  <p className="homeUser-top-core-left-date-data-text-light">Thursday</p>
                </div> {/* homeUser-top-core-left-date-data-text */}

                <div className="homeUser-top-core-left-date-data-cards">


                  <div  className="homeUser-top-core-left-date-data-cards-start">
                    <Clock style={{ 
                      width: "24px", 
                      height: "24px", 
                      '--stroke-color': 'var(--black-color-opacity-30)', 
                      '--stroke-width': '5px' 
                    }} />
                    <div className="homeUser-top-core-left-date-data-cards-start-text">
                      <p className="homeUser-top-core-left-date-data-cards-start-text-light">Starts at</p>
                      <p className="homeUser-top-core-left-date-data-cards-start-text-medium">11:30 AM</p>
                    </div> {/* homeUser-top-core-left-date-data-cards-start-text */}
                  </div> {/* homeUser-top-core-left-date-data-cards-start */}

                  <div  className="homeUser-top-core-left-date-data-cards-end">
                    <Clock style={{ 
                      width: "24px", 
                      height: "24px", 
                      '--stroke-color': 'var(--black-color-opacity-30)', 
                      '--stroke-width': '5px' 
                    }} />
                    <div className="homeUser-top-core-left-date-data-cards-end-text">
                      <p className="homeUser-top-core-left-date-data-cards-end-text-light">Ends at</p>
                      <p className="homeUser-top-core-left-date-data-cards-end-text-medium">12:00 PM</p>
                    </div> {/* homeUser-top-core-left-date-data-cards-end-text */}
                  </div> {/* homeUser-top-core-left-date-data-cards-end */}
                </div> {/* homeUser-top-core-left-date-data-cards */}
              </div> {/* homeUser-top-core-left-date-data */}
            </div> {/* homeUser-top-core-left-date */}

            <button className="homeUser-top-core-left-btn">
              <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
              <p>Set appointment</p>
            </button> {/* homeUser-top-core-left-btn */}
          </div> {/* homeUser-top-core-left */}


          <div className="homeUser-top-core-right">

            <div className="homeUser-top-core-right-header">
              <header>Certificate upload</header>
              <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
            </div> {/* homeUser-top-core-right-header */}

            <div className="homeUser-top-core-right-progress">
              <div className="homeUser-top-core-right-progress-text">
                <p>Your progress</p>
                <div className="homeUser-top-core-right-progress-text-box">
                  <p className="homeUser-top-core-right-progress-text-box-regular">75% complete</p>
                  <p className="homeUser-top-core-right-progress-text-box-light">3 out of 4 uploaded</p>
                </div> {/* homeUser-top-core-right-progress-text-box */}
              </div> {/* homeUser-top-core-right-progress-text */}

              <div className="homeUser-top-core-right-progress-bar">
                <div className="homeUser-top-core-right-progress-bar-primary">
                  NEED COLOR
                </div> {/* homeUser-top-core-right-progress-bar-primary */}
              </div> {/* homeUser-top-core-right-progress-bar */}
            </div> {/* homeUser-top-core-right-progress */}

            <div className="homeUser-top-core-right-up">
              <div className="homeUser-top-core-right-up-desc">
                <div className="homeUser-top-core-right-up-desc-header">
                  <p>File upload</p>
                  <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                </div> {/* homeUser-top-core-right-up-desc-header */}
                <p className="homeUser-top-core-right-up-desc-light">Select the type of certificate</p>
              </div> {/* homeUser-top-core-right-up-desc */}

              <button className="homeUser-top-core-right-up-btn">
                <div className="homeUser-top-core-right-up-btn-header">
                  <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                  <p>Medical</p>
                </div> {/* homeUser-top-core-right-up-btn-header */}
                <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
              </button> {/* homeUser-top-core-right-up-btn */}
            </div> {/* homeUser-top-core-right-up */}

            <div className="homeUser-top-core-right-down">
              <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
              <div className="homeUser-top-core-right-down-text">
                <p className="homeUser-top-core-right-down-text-bold">Choose a file to upload</p>
                <p className="homeUser-top-core-right-down-text-light">JPEG, PNG, and PDF formats, up to 50 MB</p>
              </div> {/* homeUser-top-core-right-down-text */}

              <button className="homeUser-top-core-right-down-btn">
                <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                <p>Browse files</p>
              </button> {/* homeUser-top-core-right-down-btn */}
            </div> {/* homeUser-top-core-right-down */}
          </div> {/* homeUser-top-core-right */}
        </div> {/* homeUser-top-core */}
      </div> {/* homeUser-top */}

      <div className="homeUser-bot">
      </div> {/* homeUser-bot */}
    </main> {/* homeUser-box-in */}
    </div> {/* homeUser-box */}
  </div>
  );
};

export default HomeUser;
