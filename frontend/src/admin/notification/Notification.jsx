import React from 'react';
import './notification.css';

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-container">
        <div className="notification-header">
          <img src="" className="" alt="notification icon" />
          <p className="notification-header-text">Notifications</p>
        </div>
        <div className="notification-tabs">
          <div className="notification-tabs-all">
            <img src="" className="" alt="all icon" />
            <p className="notification-tabs-all-text">All</p>         
          </div>
          <div className="notification-tabs-rescheduled">
            <img src="" className="" alt="rescheduled icon" />
            <p className="notification-tabs-rescheduled-text">Rescheduled</p>
          </div>
          <div className="notification-tabs-canceled">
            <img src="" className="" alt="canceled icon" />
            <p className="notification-tabs-canceled-text">Canceled</p>
          </div>
          <div className="notification-tabs-uploaded">
            <img src="" className="" alt="uploaded icon" />
            <p className="notification-tabs-uploaded-text">Uploaded</p>
          </div>         
        </div>
         
        <p className="notification-recent">Recent</p>
        <div className="notification-card">

          <div className="notification-card-indicator">

          </div>

          <div className="notification-card-details">
            <div className="notification-card-details-left">    
              <img src="" className="" alt="profile icon" />
            </div>
            <div className="notification-card-details-right">
              <div className="notification-card-details-right-top">
                <p className="notification-card-details-right-top-name">John Doe</p>
                <p className="notification-card-details-right-top-time">4 hours ago</p>
                <p className="notification-card-details-right-top-position">Fleet Crew Manager</p>
              </div>
              <div className="notification-card-details-right-middle">
                <p className="notification-card-details-right-middle-description">Rescheduled an appointment for</p>
                <p className="notification-card-details-right-middle-name">Juan Dela R. Cruz</p>
              </div>
              <div className="notification-card-details-right-bottom">
                <div className="notification-card-details-right-bottom-left">
                  <img src="" className="" alt="calendar icon" />
                  <div className="notification-card-details-right-bottom-left-text">
                    <p className="notification-card-details-right-bottom-left-text-day">Monday</p>
                    <p className="notification-card-details-right-bottom-left-text-date">DEC - 24 - 2024</p>
                  </div>
                </div>
                <div className="notification-card-details-right-bottom-middle">
                  <img src="" className="" alt="timer icon" />
                  <div className="notification-card-details-right-bottom-middle-text">
                    <p className="notification-card-details-right-bottom-middle-text-starts">Starts at</p>
                    <p className="notification-card-details-right-bottom-middle-text-time">11:30 AM</p>
                  </div>
                </div>
                <div className="notification-card-details-right-bottom-right">
                  <img src="" className="" alt="timer icon" />
                  <div className="notification-card-details-right-bottom-right-text">
                    <p className="notification-card-details-right-bottom-right-text-starts">End at</p>
                    <p className="notification-card-details-right-bottom-right-text-time">12:00 PM</p>
                  </div>           
                </div>
              </div>
            </div>
          </div>

          <div className="notification-card-class">
            <img src="" className="" alt="class icon" />
            <p className="notification-card-class-text">Trainee 4th Engineer</p>
          </div>

          <div className="notification-card-button">
            <div className="notification-card-button-bg">
              <img src="" className="" alt="edit icon" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Notification;
