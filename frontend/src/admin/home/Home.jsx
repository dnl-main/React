import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">


    <div className="dashboard-all">
      <div className="dashboard-header">
        <img src="" className="aica" alt="Dashdboard" />
        <p>Dashboard</p>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-container-left">
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

          <div className="dashboard-container-left-bottom"> 
            <div className="weekly_new-header">
              <p className="weekly_new-header-text">
                Weekly New Applicants
              </p>
              <img src="" className="aica" alt="Weekly New Logo" />
              <img src="" className="aica" alt="Back Button" />
            </div>
            <div className="weekly_new-indicator">
              <p className="weekly_new-header-total">54</p>
              <p className="weekly_new-header-today">+ 10 Today</p>
            </div>
          </div>
        </div>


        <div className="dashboard-container-middle">
          <div className="dashboard-container-middle-top">
            <div className="coming_today-header">
              <p className="coming_today-header-text">
                Coming Today
              </p>
              <img src="" className="aica" alt="Coming Today Logo" />
              <img src="" className="aica" alt="Back Button" />
            </div>

            <div className="coming_today-indicator">
              <p className="coming_today-indicator-text">
                10</p>
              <div className="coming_today-indicator-date">
                <p className="coming_today-indicator-date-text">Arrival Time</p>
                <p className="coming_today-indicator-date-time">10:30 AM</p>
              </div>
            </div>
          </div>

          <div className="dashboard-container-middle-bottom">
            <div className="upcoming_appointment-header">
              <p  className="upcoming_appointment-header-text">
                Upcoming Appointment
              </p>
              <img src="" className="aica" alt="Upcoming Appointment Logo" />
              <img src="" className="aica" alt="Back Button" />
            </div>

            <div className="upcoming_appointment-indicator">
              <p className="upcoming_appointment-indicator-text">32</p>
              <div className="upcoming_appointment-indicator-date">
                <p className="upcoming_appointment-indicator-date-text">Arrival Date</p>
                <p className="upcoming_appointment-indicator-date-month">December 13, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-container-right">
          <div className="expiring_certificate-header">
            <p className="expiring_certificate-header-text">
              Expiring Certificate
            </p>
            <img src="" className="aica" alt="Expiring Certificate Logo" />
            <img src="" className="aica" alt="Back Button" />
          </div>

          <div className="expiring_certificate-container-top">
            <img src="" className="aica" alt="Profile Pic" />

            <div className="expiring_certificate-container-top-text">
              <p className="expiring_certificate-container-top-text-name"> John R. Smith</p>
              <p className="expiring_certificate-container-top-text-certificate">Java NCIII</p>
            </div>
          </div>

          <div className="expiring_certificate-container-bottom">
            <div className="expiring_certificate-container-bottom-left"> 
              <p className="expiring_certificate-container-bottom-left-text">
                Notify
              </p>
              <img src="" className="aica" alt="Notify Logo" />
            </div>
            <div className="expiring_certificate-container-right"> 
              <p className="expiring_certificate-container-right-text">Expires At:</p>
              <p className="expiring_certificate-container-right-date">DEC - 12 - 2024</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    
    
    <div className="scheduled_appointment-all">
      <div className="scheduled_appointment-header">
      <img src="" className="aica" alt="Coming TOday Icon" />
      <p className="scheduled_appointment-header-text">Coming Today</p>
      </div>

      <div className="scheduled_appointment-container">
        <div className="scheduled_appointment-indicator">
        </div>

        <div className="scheduled_appointment-date">
          <p className="scheduled_appointment-date-day">Mon</p>
          <p className="scheduled_appointment-date-date">28</p>
        </div>

        <div className="scheduled_appointment-separator">
        </div>

        <div className="scheduled_appointment-time">
          <p className="scheduled_appointment-time-from">10:30 AM</p>
          <p className="scheduled_appointment-time-to">To 11:00 AM</p>
        </div>

        <div className="scheduled_appointment-profile">
          <img src="" className="aica" alt="Profile Picture" />
          <div className="scheduled_appointment-profile-details">
            <p className="scheduled_appointment-profile-details-name">Juan A. Dela Cruz</p>
            <div className="scheduled_appointment-job_title-container">
              <img src="" className="aica" alt="Job Icon" />
              <p className="scheduled_appointment-job_title-container-position">Trainee 4th Engineer</p>
            </div>
          </div>
        </div>

        <div className="scheduled_appointment-contact">
          <div className="scheduled_appointment-mobile">
            <img src="" className="aica" alt="Phone Icon" />
            <p className="scheduled_appointment-mobile-text">+63 921-684-7777</p>
          </div>
          <div className="scheduled_appointment-email">
            <img src="" className="aica" alt="Email Icon" />
            <p className="scheduled_appointment-email-text">juandelacruz@gmail.com</p>
          </div>
        </div>

        <div className="scheduled_appointment-button">
          <img src="" className="aica" alt="Edit Icon" />
        </div>
      </div>
      </div>    
    </div>
  );
};

export default Home;
