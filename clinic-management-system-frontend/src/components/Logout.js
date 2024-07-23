// src/components/Logout.js
import React from 'react';
import '../styles/Logout.css';

const Logout = ({ onClose }) => {
  return (
    <div className="logout-overlay">
      <div className="logout-modal">
        <h2>Are you sure you want to logout?</h2>
        <button onClick={onClose}>Cancel</button>
        <button onClick={() => {
          // Add logic for logging out if needed
          onClose(); // Close the modal after logging out
        }}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
