import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Farmer's Market
        </Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </Link>
        <Link to="/account" className="user-icon">
          <i className="fas fa-user">a</i>
        </Link>
      </div>
    </nav>
  );
};
