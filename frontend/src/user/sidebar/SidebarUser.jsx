import React from 'react';
import './sidebarUser.css';
import { Link } from 'react-router-dom';

import concorde_logo from '../../assets/logo/concorde_logo.webp';
import House_01 from '../../assets/icons/House_01.svg';
import Notebook from '../../assets/icons/Notebook.svg?react';

const SidebarUser = () => {
  return (
    <div className="sidebarUser">
      <div className="sidebarUser-logo">
        <button>
          <Link to="/landing">
            <img src={concorde_logo} className="" alt="main icon" />
          </Link>
        </button>
      </div> {/* sidebarUser-logo */}

      <div className="sidebarUser-buttons">
        <button>
          <Link to="/homeUser">
            <img src={House_01} className="" alt="home icon" />
          </Link>
        </button>
      
        <button>
          <Link to="/certificateUser">
            <Notebook 
              style={{ 
                color: "var(--primary-color)", 
                width: "32px", 
                height: "32px", 
                "--stroke-width": "4px"  
              }} 
            />
          </Link>
        </button>
      </div> {/* sidebarUser-buttons */}
    </div>
  );
};

export default SidebarUser;
