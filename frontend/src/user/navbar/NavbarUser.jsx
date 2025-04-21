import React from 'react';
import { Link } from 'react-router-dom';
import './navbarUser.css';

import Search from '../../assets/icons/Search.svg';
import Filter from '../../assets/icons/Filter.svg';

import Bell from '../../assets/icons/Bell.svg?react';
import User_Circle from '../../assets/icons/User_Circle.svg?react';

const NavbarUser = () => {
  return (
    <div className="navbarUser">
      <header className="navbarUser-header">
        <p>Concorde</p>
      </header> {/* navbarUser-header */}
        
      <main className="navbarUser-main">
        <div className="navbarUser-main-search">
          <div className="navbarUser-main-search-left">
            <img src={Search} className="" alt="Search icon" />
            <p>Search</p>
          </div> {/* navbarUser-main-search-left */}
        
          <div className="navbarUser-main-search-right">
            <div className="navbarUser-main-search-right-bg">
              <img src={Filter} className="" alt="Filter icon" />
            </div> {/* navbarUser-main-search-right-bg */}
          </div> {/* navbarUser-main-search-right */}
        </div> {/* navbarUser-main-search */}
        
        <div className="navbarUser-main-notification">
          <Link to="/notificationUser">
            <Bell 
              style={{ 
                color: "var(--primary-color)", 
                width: "32px", 
                height: "32px", 
                "--stroke-width": "5px"  
              }} 
            />
          </Link>
        </div> {/* navbarUser-main-notification */}
        
        <div className="navbarUser-main-account">
          <Link to="/accountUser"> 
            <User_Circle 
              style={{ 
                color: "var(--primary-color)", 
                width: "32px", 
                height: "32px", 
                "--stroke-width": "5px"  
              }} 
            />
          </Link>
        </div> {/* navbarUser-main-account */}
      </main> {/* navbarUser-main */}
    </div>
  );
};

export default NavbarUser;
