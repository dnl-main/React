import React from 'react';
import './schedule.css';

const Schedule = () => {
  return (
    <div className="scheduled_appointment">
      <div className="scheduled_appointment-header">
        <img src="" className="Crew" alt="scheduled Icon" />
        <p className="scheduled_appointment-header-text">Scheduled Appointments</p>
      </div>

      <div className="scheduled_appointment-tabs">
        <div className="scheduled_appointment-tabs-all">
          <img src="" className="Crew" alt="all Icon" />
          <p className="scheduled_appointment-tabs-all-text">All</p>
        </div>

        <div className="scheduled_appointment-tabs-today">
          <img src="" className="Crew" alt="today Icon" />
          <p className="scheduled_appointment-tabs-today-text">Today</p>
        </div>

        <div className="scheduled_appointment-tabs-upcoming">
          <img src="" className="Crew" alt="upcoming Icon" />
          <p className="scheduled_appointment-tabs-upcoming-text">Upcoming</p>
        </div>

        <div className="scheduled_appointment-tabs-completed">
          <img src="" className="Crew" alt="completed Icon" />
          <p className="scheduled_appointment-tabs-completed-text">Completed</p>
        </div>
      </div>

      <p className="scheduled_appointment-today">Today</p>



{/*  */}
      <div className="scheduled_appointment-today-cards">
        <div className="scheduled_appointment-today-cards-container">
          <div className="scheduled_appointment-today-cards-indicator">
          </div>

          <div className="scheduled_appointment-today-cards-date">
            <p className="scheduled_appointment-today-cards-date-day">Mon</p>
            <p className="scheduled_appointment-today-cards-date-date">28</p>
          </div>

          <div className="scheduled_appointment-today-cards-separator">
          </div>

          <div className="scheduled_appointment-today-cards-time">
            <p className="scheduled_appointment-today-cards-time-from">10:30 AM</p>
            <p className="scheduled_appointment-today-cards-time-to">To 11:00 AM</p>
          </div>

          <div className="scheduled_appointment-today-cards-profile">
            <img src="" className="aica" alt="Profile Picture" />
            <div className="scheduled_appointment-today-cards-profile-details">
              <p className="scheduled_appointment-today-cards-profile-details-name">Juan A. Dela Cruz</p>
              <div className="scheduled_appointment-today-cards-profile-details-container">
                <img src="" className="aica" alt="Job Icon" />
                <p className="scheduled_appointment-today-cards-profile-details-container-position">Trainee 4th Engineer</p>
              </div>
            </div>
          </div>

          <div className="scheduled_appointment-today-cards-contact">
            <div className="scheduled_appointment-today-cards-mobile">
              <img src="" className="aica" alt="Phone Icon" />
              <p className="scheduled_appointment-today-cards-mobile-text">+63 921-684-7777</p>
            </div>
            <div className="scheduled_appointment-today-cards-email">
              <img src="" className="aica" alt="Email Icon" />
              <p className="scheduled_appointment-today-cards-email-text">juandelacruz@gmail.com</p>
            </div>
          </div>

          <div className="scheduled_appointment-today-cards-button">
            <img src="" className="aica" alt="Edit Icon" />
          </div>
        </div>
      </div>
{/*  */}




      <p className="scheduled_appointment-completed">Completed</p>

      <div className="scheduled_appointment-completed-cards">
        <div className="scheduled_appointment-completed-cards-container">
          <div className="scheduled_appointment-completed-cards-indicator">
          </div>

          <div className="scheduled_appointment-completed-cards-date">
            <p className="scheduled_appointment-completed-cards-date-day">Mon</p>
            <p className="scheduled_appointment-completed-cards-date-date">28</p>
          </div>

          <div className="scheduled_appointment-completed-cards-separator">
          </div>

          <div className="scheduled_appointment-completed-cards-time">
            <p className="scheduled_appointment-completed-cards-time-from">10:30 AM</p>
            <p className="scheduled_appointment-completed-cards-time-to">To 11:00 AM</p>
          </div>

          <div className="scheduled_appointment-completed-cards-profile">
            <img src="" className="aica" alt="Profile Picture" />
            <div className="scheduled_appointment-completed-cards-profile-details">
              <p className="scheduled_appointment-completed-cards-profile-details-name">Juan A. Dela Cruz</p>
              <div className="scheduled_appointment-completed-cards-profile-details-container">
                <img src="" className="aica" alt="Job Icon" />
                <p className="scheduled_appointment-completed-cards-profile-details-container-position">Trainee 4th Engineer</p>
              </div>
            </div>
          </div>

          <div className="scheduled_appointment-completed-cards-contact">
            <div className="scheduled_appointment-completed-cards-mobile">
              <img src="" className="aica" alt="Phone Icon" />
              <p className="scheduled_appointment-completed-cards-mobile-text">+63 921-684-7777</p>
            </div>
            <div className="scheduled_appointment-completed-cards-email">
              <img src="" className="aica" alt="Email Icon" />
              <p className="scheduled_appointment-completed-cards-email-text">juandelacruz@gmail.com</p>
            </div>
          </div>

          <div className="scheduled_appointment-completed-cards-button">
            <img src="" className="aica" alt="Edit Icon" />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Schedule;
