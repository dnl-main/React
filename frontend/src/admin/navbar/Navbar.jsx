import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css';
import Bell from '../../assets/icons/Bell.svg';
import Search from '../../assets/icons/Search.svg';
import Filter from '../../assets/icons/Filter.svg';
import User_Circle from '../../assets/icons/User_Circle.svg';


export const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="navbar-header">
        <p>Concorde</p>
      </header> {/* navbar-header */}

      <main className="navbar-main">
        <div className="navbar-main-search">
          <div className="navbar-main-search-left">
            <img src={Search} className="" alt="Search icon" />
            <p>Search</p>
          </div> {/* navbar-main-search-left */}

          <div className="navbar-main-search-right">
            <div className="navbar-main-search-right-bg">
              <img src={Filter} className="" alt="Filter icon" />
            </div> {/* navbar-main-search-right-bg */}
          </div> {/* navbar-main-search-right */}
        </div> {/* navbar-main-search */}

        <div className="navbar-main-notification">
          <img src={Bell} className="" alt="Notification icon" />
        </div> {/* navbar-main-notification */}

        <div className="navbar-main-account">
          <img src={User_Circle} className="" alt="nav account icon" />

        </div> {/* navbar-main-account */}
      </main> {/* navbar-main */}
    </nav>
  );
};
