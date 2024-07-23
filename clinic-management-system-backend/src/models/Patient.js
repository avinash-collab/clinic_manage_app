const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true, lowercase: true },
  address: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Patient', patientSchema);
