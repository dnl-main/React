import React from 'react';
import './notificationUser.css';

const NotificationUser = () => {
  return (
    <div className="notifications-container">
    <header className="notifications-header">
      <h2><i className="fas fa-bell"></i> Notifications</h2>
    </header>
    <div className="filter-tabs"> 
      <div className="filter-tab active">
        <i className="fas fa-circle"></i> All
      </div>
      <div className="filter-tab">
        <i className="fas fa-circle"></i> Reschedule
      </div>
      <div className="filter-tab">
        <i className="fas fa-circle"></i> Cancellation
      </div>
      <div className="filter-tab">
        <i className="fas fa-circle"></i> Uploads
      </div>
    </div>

    <div>
      <div className="notification-span">
        <span> Recents </span>
      </div>
    </div>

    <div className="notification-item">
      <div className="notification-left">
        <div className="avatar"></div>
        <div className="notification-content">
          <p className="title">John Doe - Fleet Crew Manager</p>
          <p className="subtext">You have an appointment with John Doe</p>
          <div className="subtext-container">
        
            <div className="date-time-card">
              <p><i className="fas fa-calendar"></i> Monday, Dec 28, 2024</p>
            </div>
            <div className="date-time-card">
              <p><i className="fas fa-clock"></i> Start: 11:30 AM</p>
            </div>
            <div className="date-time-card">
              <p><i className="fas fa-clock"></i> End: 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="notification-right">
        <button className="action-btn">
          <i className="fas fa-circle"></i>
          New Appointment
        </button>
        <i className="fas fa-check-circle check-icon"></i>
      </div>

    </div>
    
    <div className ="notification-item">
      <div className ="notification-left">
        <div className ="avatar"></div>
        <div className="notification-content">
          <p className="title">Rin Itoshi - Fleet Crew Manager</p>
          <p className="subtext">Your appointment with Rin Itoshi has been rescheduled</p>
          <div className="subtext-container">

            <div className="date-time-card">
              <p><i className="fas fa-calendar"></i> Monday, Dec 28, 2024</p>
            </div>
            <div className="date-time-card">
              <p><i className="fas fa-clock"></i> Start: 11:30 AM</p>
            </div>
            <div className="date-time-card">
              <p><i className="fas fa-clock"></i> End: 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="notification-right">
        <button className="action-btn">
          <i className="fas fa-circle"></i>
          Reschedule
        </button>
        <i className="fas fa-sync-alt"></i>
      </div>

    </div>
    <div className="notification-item">
      <div className="notification-left">
        <div className="avatar"></div>
        <div className="notification-content">
          <p className="title">Nagi Seisho</p>
          <p className="subtext">Please upload your Medical Certificate</p>
        </div>
      </div>

      <div className="notification-right">
        <button className="action-btn">
          <i className="fas fa-circle"></i>
          Certificate Upload
        </button>
        <i className="fas fa-upload upload-icon"></i>
      </div>

    </div>
    <div className="notification-item">
      <div className="notification-left">
        <div className="avatar"></div>
        <div className="notification-content">
          <p className="title">Sae Itoshi</p>
          <p className="subtext">Your appointment with John Doe has been canceled</p>
        </div>
      </div>

      <div className="notification-right">
        <button className="action-btn">
          <i className ="fas fa-circle"></i>
          Cancellation
        </button>
        <i className="fas fa-times-circle cancel-icon"></i>
      </div>

    </div>
  </div>
  );

};

export default NotificationUser;
