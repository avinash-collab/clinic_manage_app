import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = ({ goBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    emailAddress: '',
    password: '',
    specialty: '',
    qualifications: '',
    clinicName: '',
    clinicAddress: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/doctors/register', formData);
      alert('Doctor registered successfully');
      goBack();
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Doctor Registration</h2>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
      <input type="email" name="emailAddress" placeholder="Email Address" onChange={handleChange} required />
      <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} required />
      <input type="text" name="qualifications" placeholder="Qualifications" onChange={handleChange} required />
      <input type="text" name="clinicName" placeholder="Clinic Name" onChange={handleChange} required />
      <input type="text" name="clinicAddress" placeholder="Clinic Address" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      {error && <span className="error">{error}</span>}
      <button type="submit">Register</button>
      <button type="button" onClick={goBack}>Back</button>
    </form>
  );
};

export default DoctorForm;
