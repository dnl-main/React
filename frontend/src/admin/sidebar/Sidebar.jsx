import React from 'react';
import './sidebar.css';
import House_01 from '../../assets/icons/House_01.svg';
import Book from '../../assets/icons/Book.svg';

import Calendar from '../../assets/icons/Calendar.svg';
import concorde_logo from '../../assets/logo/concorde_logo.webp';

import Users from '../../assets/icons/Users.svg?react';
import Notebook from '../../assets/icons/Notebook.svg?react';
import Home from '../home/Home'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="sidebar-logo">
      
      <Link to="/landing">
        <button>
          <img src={concorde_logo} className="" alt="Search icon" />
        </button>
      </Link>
    </div> {/* sidebar-logo */}

    <div className="sidebar-buttons">
      <Link to="/">
        <button>
          <img src={House_01} className="" alt="home icon" />
        </button>
      </Link>

      <button>
        <Users style={{ width: "32px", height: "32px", color: "#00889a", strokeWidth: 2 }} />
      </button>

      <button>
        <img src={Calendar} className="" alt="calendar icon" />
      </button>

      <button>
      <Notebook 
        style={{ 
          color: "var(--primary-color)", 
          width: "32px", 
          height: "32px", 
          "--stroke-width": "4px"  // ✅ Adjust stroke width dynamically
        }} 
      />

      </button>

      <button>  
        <img src={Book} className="" alt="scheduled appointment icon" />
      </button>
      
    </div> {/* sidebar-buttons */}
  </div>
  );
};

export default Sidebar;

