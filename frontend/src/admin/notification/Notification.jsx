import React from 'react';
import './notification.css';
// nav
import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import NotificationCard from './notificationComponent/NotificationCard';
// icons
import Calendar_Event from '../../assets/icons/Calendar_Event.svg?react';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Edit_Pencil_01 from '../../assets/icons/Edit_Pencil_01.svg?react';
import Bell from '../../assets/icons/Bell.svg?react';

const Notification = () => {
  return (
    <div className="notification">
    <Navbar />
    <Sidebar />
    <div className="notification-box">
      <main className="notification-box-in">
        <header className="notification-header">
          <Bell 
            style={{ 
              color: "var(--black-color)", 
              width: "32px", 
              height: "32px", 
              "--stroke-width": "5px"  
            }} 
          />
          <p>Notifications</p> 
        </header> {/* notification-header */}

        <section className="notification-tabs">
          <button className="notification-tabs-all">
            <Circle_Primary style={{ color: "var(--white-color)", width: "20px", height: "20px" }} />
            <p>All</p>
          </button> {/* notification-tabs-all */}

          <button className="notification-tabs-rescheduled">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Rescheduled</p>
          </button> {/* notification-tabs-rescheduled */}

          <button className="notification-tabs-canceled">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Canceled</p>
          </button> {/* notification-tabs-canceled */}

          <button className="notification-tabs-uploaded">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Uploaded</p>
          </button> {/* notification-tabs-uploaded */}
        </section> {/* notification-tabs */}

        <section className="notification-container">
          <header className="notification-header-recents">
            <p>Recents</p>
          </header> {/* notification-header-recents */}

          <div className="notification-cards">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard /> 
          </div> {/* notification-cards */}
        </section>
      </main> {/* notification-box-in */}
    </div> {/* notification-box */}
    </div>
  );
};

export default Notification;
