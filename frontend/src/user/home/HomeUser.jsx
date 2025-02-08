import React from 'react';
import './homeUser.css';

const HomeUser = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="home-icon">
        <i className="fa-solid fa-house"></i>
        <span>Home</span></div>
        <div className="status-indicator">
        <i className="fa-solid fa-circle-check"></i>
        <span className="status-text">Available</span>
        <i className="fa-solid fa-angle-down"></i>
        </div></div>

        <div className="main-content">
  <div className="scheduled-certificate-wrapper">
    {/* Scheduled Appointment Section */}
    <div className="card scheduled-appointment">
      <h3>You have an appointment</h3>
      <div className="appointment-details">
        <i className="fa-solid fa-calendar-days"></i>
        <div>
          <p className="date">December 28, 2024</p>
          <p className="time">Starts at: 12:30 PM</p>
          <p className="time">Ends at: 1:00 PM</p>
        </div>
      </div>
      <button className="set-appointment">Set Appointment</button>
    </div>

    {/* Certificate Upload Section */}
    <div className="card certificate-upload">
      <h3>Certificate Upload</h3>
      <p>Your progress: <strong>75% complete</strong></p>
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>

      <div className="file-upload">
        <label htmlFor="certificate-type">Select the type of certificate:</label>
        <select id="certificate-type">
          <option value="medical">Medical</option>
        </select>
        <div className="file-input">
          <label htmlFor="file-upload">
            <i className="fa-solid fa-upload"></i> Choose a file to upload
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".jpeg, .png, .pdf"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      
      <div className="notifications">
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "#444" }}>
        <i className="fa-solid fa-bell" style={{ color: "#00899A" }}></i>
        Notifications
      </h3>

      <div className="notification-item">
      <div className="profile-icon"></div>
      <div className="details">
      <p><strong>John Doe</strong> - Fleet Crew Manager</p>
      <p className="subtext">You have an appointment with John Doe</p>
      <div className="date-time">
      <div className="date-card">
      <p className="date">
        <i className="fa-solid fa-calendar-days"></i> Monday, Dec 28, 2024</p>
        </div>
        <div className="start-time-card">
      <p className="time">
      <i className="fa-solid fa-clock"></i> Starts at: 11:30 AM</p>
        </div>
        <div className="end-time-card">
      <p className="time">
        <i className="fa-solid fa-clock"></i> Ends at: 12:00 PM</p>
        </div>
        </div>
        </div>
        <button className="new-appointment">New Appointment</button>
        <i className="fas fa-check-circle check-icon"></i>
      </div>
      </div>
      </div>
  );
};

export default HomeUser;
