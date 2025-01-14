import React from 'react';
import './homeLeftTop.css';

const HomeLeftTop = () => {
  return (
    <div className="left-top">
        <div className="dashboard-container-left-top">          
            <div className="available_crew-header">
              <p className="available_crew-header-text">
                Available Crew
              </p>
              <img src="" className="aica" alt="Available Crew Logo" />
            <img src="" className="aica" alt="Back Button" />
            </div>

            <div className="available_crew-indicator">
              <p className="available_crew-indicator-total">25</p>
              <p className="available_crew-indicator-complete">21 Complete</p>
            </div>

            <div className="available_crew-job_title">
              <p className="available_crew-job_title-text">
                Job Title
              </p>
              <div className="job_title-container">
                <div className="job_title-container-1">
                  <img src="" className="aica" alt="Job Icon" />
                  <p className="job_title-container-1-text">Trainee 4th Engineer</p>
                </div>
                <div className="job_title-container-2">
                  <img src="" className="aica" alt="Job Icon" />
                  <p className="job_title-container-2-text">Chief Engineer</p>
                </div>
                <div className="job_title-container-3">
                  <img src="" className="aica" alt="Job Icon" />
                  <p className="job_title-container-3-text">More</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default HomeLeftTop;
