import React from 'react';
import './notificationUser.css';
import NotificationUserCard from './notificationComponents/NotificationUserCard';
// nav
import SidebarUser from '../sidebar/SidebarUser';
import NavbarUser from '../navbar/NavbarUser';
// icons
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Bell from '../../assets/icons/Bell.svg?react';


const NotificationUser = () => {
  return (
    <div className="notificationUser">
    <NavbarUser />
    <SidebarUser />
    <div className="notificationUser-box">
      <main className="notificationUser-box-in">
        <header className="notificationUser-header">
          <Bell 
            style={{ 
              color: "var(--black-color)", 
              width: "32px", 
              height: "32px", 
              "--stroke-width": "5px"  
            }} 
          />
          <p>Notifications</p> 
        </header> {/* notificationUser-header */}

        <section className="notificationUser-tabs">
          <button className="notificationUser-tabs-all">
            <Circle_Primary style={{ color: "var(--white-color)", width: "20px", height: "20px" }} />
            <p>All</p>
          </button> {/* notificationUser-tabs-all */}

          <button className="notificationUser-tabs-rescheduled">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Reschedule</p>
          </button> {/* notificationUser-tabs-rescheduled */}

          <button className="notificationUser-tabs-canceled">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Cancellation</p>
          </button> {/* notificationUser-tabs-canceled */}

          <button className="notificationUser-tabs-uploaded">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Uploads</p>
          </button> {/* notificationUser-tabs-uploaded */}
        </section> {/* notificationUser-tabs */}

        <section className="notificationUser-container">
          <header className="notificationUser-header-recents">
            <p>Recents</p>
          </header> {/* notificationUser-header-recents */}

          <div className="notificationUser-cards">
            <NotificationUserCard />
            <NotificationUserCard />
            <NotificationUserCard /> 
          </div> {/* notificationUser-cards */}
        </section>
      </main> {/* notificationUser-box-in */}
    </div> {/* notificationUser-box */}
    </div>
  );
};

export default NotificationUser;
