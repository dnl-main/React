import React from 'react';
import './notification.css';

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-all">
        <div className="notification-all-header">
          <p>Dashboard</p>
        </div>
        <div className="notification-all-container">
          <div className="notification-all-container-left">
            <div className="notification-all-container-left-top">
              <div className="available_crew-container">
                <div className="available_crew-container-top">
                  <p className="available_crew-container-top-header">Available Crew</p>
                  <img src="" className="" alt="availability icon" />
                  <img src="" className="" alt="back button" />
                </div>
                <div className="available_crew-container-middle">
                  <p className="available_crew-container-middle-indicator-1">25</p>
                  <p className="available_crew-container-middle-indicator-2">21 Complete</p>
                  
                </div>
                <div className="available_crew-container-bottom">
                  <p>Job title</p>
                  <div className="available_crew-container-bottom-job_title-container">
                    <div className="available_crew-container-bottom-job_title-container-1">
                      <img src="" className="" alt="job title icon" />
                      <p className="available_crew-container-bottom-job_title-container-1-text">Trainee 4Th Engineer</p>
                    </div>
                    <div className="available_crew-container-bottom-job_title-container-2">
                      <img src="" className="" alt="job title icon" />
                      <p className="available_crew-container-bottom-job_title-container-2-text">Chief Engineer</p>
                    </div>
                    <div className="available_crew-container-bottom-job_title-container-3">
                      <img src="" className="" alt="job title icon" />
                      <p className="available_crew-container-bottom-job_title-container-3-text">More</p>
                    </div>

                  </div>
                  
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="notification-all-container-left-bottom">
              <p>left bottom</p>
            </div>
          </div>



          <div className="notification-all-container-middle">
            <div className="notification-all-container-middle-top">
              <h1>middle top</h1>

            </div>
            <div className="notification-all-container-middle-bottom">
            <h1>middle middle bottom</h1>

            </div>
          </div>
          <div className="notification-all-container-right">
            <h1>right</h1>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Notification;
