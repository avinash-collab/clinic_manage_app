const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
require('dotenv').config();
process.env.JWT_SECRET = 'mySuperSecretKey12345';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

console.log('JWT_SECRET:', JWT_SECRET); // Debug statement to check if JWT_SECRET is being read

// Doctor Registration
router.post('/doctors/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const doctor = new Doctor({ ...req.body, password: hashedPassword });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Doctor Login
router.post('/doctors/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);
    const doctor = await Doctor.findOne({ emailAddress: req.body.emailAddress });
    if (!doctor) {
      console.log('Doctor not found:', req.body.emailAddress);
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const isMatch = await bcrypt.compare(req.body.password, doctor.password);
    if (!isMatch) {
      console.log('Invalid credentials for doctor:', req.body.emailAddress);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: doctor._id, role: 'doctor' }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in doctor login:', error);
    res.status(500).json({ message: error.message });
  }
});

// Patient Registration
router.post('/patients/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const patient = new Patient({ ...req.body, emailAddress: req.body.emailAddress.toLowerCase(), password: hashedPassword });
    await patient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Patient Login
router.post('/patients/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);
    const patient = await Patient.findOne({ emailAddress: req.body.emailAddress });
    if (!patient) {
      console.log('Patient not found:', req.body.emailAddress);
      return res.status(404).json({ message: 'Patient not found' });
    }

    const isMatch = await bcrypt.compare(req.body.password, patient.password);
    if (!isMatch) {
      console.log('Invalid credentials for patient:', req.body.emailAddress);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: patient._id, role: 'patient' }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in patient login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
