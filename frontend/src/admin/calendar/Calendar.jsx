import React from 'react';
import './calendar.css';
import ManageApt from './manageApt/ManageApt';

const Calendar = () => {
  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <button>Manage Appointment
        <ManageApt />
      </button>
    </div>
  );
};

export default Calendar;

