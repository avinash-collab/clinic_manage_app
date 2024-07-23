// Home.js
import React, { useState } from 'react';
import BookForm from './BookForm'; // Import the form component
import '../styles/Home.css'; // Ensure to import the CSS file

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="home">
      {!isFormVisible ? (
        <div className="home-content">
          <h2>Welcome to the Clinic Management System</h2>
          <button onClick={handleOpenForm}>Book Appointment</button>
        </div>
      ) : (
        <div className="form-overlay">
          <div className="form-container">
            <BookForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
