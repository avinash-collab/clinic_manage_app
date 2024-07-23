const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  specialty: { type: String, required: true },
  qualifications: { type: String, required: true },
  clinicName: { type: String, required: true },
  clinicAddress: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
