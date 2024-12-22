import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand-name">
          <h1>Concorde</h1>
        </Link>
        
      </div>
      <div className="navbar-right">
        <Link to="/account" className="user-icon">
          <div className="fas fa-user">Account</div>
        </Link>
      </div>
    </nav>
  );
};
