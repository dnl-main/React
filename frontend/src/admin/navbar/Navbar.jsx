import React from 'react';
// import { Link } from 'react-router-dom';
//import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <div className="right-corner">
        <div className="search">
          <form>
            <input type="text" name="search-bar" placeholder="Search..." aria-label="Search" />
            <img src="menu.png" alt="Adjust Icon" />
          </form>
        </div>
        <div className="profile">
          <img src="notifs.png" alt="Notifications" />
          <img src="prof.png" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};
