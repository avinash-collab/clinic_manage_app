// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Ensure this is pointing to the correct path

const Footer = () => (
  <div className="Footer">
    <p>&copy; {new Date().getFullYear()} Clinic Management System. All rights reserved.</p>
    <div className="Footer-content">
      <p className="Footer-address">Address: ABC, India</p>
      <div className="Footer-social">
      <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </div>
);

export default Footer;
