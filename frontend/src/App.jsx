// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './admin/navbar/Navbar'
import Home from './admin/home/Home' ;
import Availability from './admin/availability/Availability';
import Account from './admin/account/account';
import Calendar from './admin/calendar/Calendar';
import Certificate from './admin/certificate/Certificate';
import Notification from './admin/notification/Notification';
import Schedule from './admin/schedule/Schedule';
import Sidebar from './admin/sidebar/Sidebar';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
