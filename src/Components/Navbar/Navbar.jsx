// Navbar.js
import React from 'react';
import { FaCalendarAlt, FaRegCalendar, FaRegCompass } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-link">
        <FaRegCalendar className="nav-icon" />
        Events
      </div>
      <div className="nav-link">
        <FaCalendarAlt className="nav-icon" />
        Calendar
      </div>
      <div className="nav-link">
        <FaRegCompass className="nav-icon" />
        Explore
      </div>
    </div>
  );
};

export default Navbar;
