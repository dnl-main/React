// src/Home.jsx
import React from 'react';
import './home.css'
import HomeHeader from './home-header';
import HomeButtons from './home-buttons';
import Products from '../products/products';

const Home = () => {
  return (
    <div className="home">
    <HomeHeader />
    
    <HomeButtons />

    <Products />

    
  </div>
  );
};

export default Home;
