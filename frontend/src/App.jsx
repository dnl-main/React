// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './pages/navbar/navbar';  // Assuming your Navbar component is inside the 'pages' folder
import Home from './pages/home/home';  // Import the Home component from the 'pages' folder
import Products from './pages/products/products';   // Default import without curly braces
import Cart from './pages/cart/cart';           // Default import without curly braces
import Account from './pages/account/account';    // Import Account component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
