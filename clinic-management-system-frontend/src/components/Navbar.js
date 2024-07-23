// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Ensure this is pointing to the correct path

const Navbar = ({ onLoginClick, onNavClick ,onLogoutClick }) => (
  <div className="Navbar">
    <h1>Clinic Management System</h1>
    <ul>
      <li><a href="#home" onClick={() => onNavClick('home')}>Home</a></li>
      <li><a href="#appointments" onClick={() => onNavClick('appointments')}>Appointments</a></li>
      <li><a href="#medical-records" onClick={() => onNavClick('medicalRecords')}>Medical Records</a></li>
      <li><a href="#notifications" onClick={() => onNavClick('notifications')}>Notifications</a></li>
      <li><a href="#logout" onClick={onLogoutClick}>Logout</a></li>
      <li><button onClick={onLoginClick}>Login</button></li>
    </ul>
  </div>
);

export default Navbar;
