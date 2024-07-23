// DoctorForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    doctorName: '',
    diseaseCategory: '',
    hospitalName: '',
    fees: '',
    date: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL to match your backend API
      await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Appointment booked successfully!');
      onClose(); // Close the form on successful submission
    } catch (error) {
      setError('Failed to book appointment');
    }
  };

  return (
    <div className="book-form">
      <h2>Book a Doctor's Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor's Name"
          value={formData.doctorName}
          onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Disease Category"
          value={formData.diseaseCategory}
          onChange={(e) => setFormData({ ...formData, diseaseCategory: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Hospital Name"
          value={formData.hospitalName}
          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Fees"
          value={formData.fees}
          onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        {error && <span className="error">{error}</span>}
        <button type="submit">Book Appointment</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BookForm;
