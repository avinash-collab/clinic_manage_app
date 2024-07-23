const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

process.env.JWT_SECRET = 'mySuperSecretKey12345';
const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET:', JWT_SECRET);


const authRoutes = require('./routes/authRoutes'); // Importing the authentication routes


const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Database connection
const MONGO_URI = 'mongodb://localhost:27017/clinic-management-system'; // Replace with your actual MongoDB URI


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

  
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes); // Use authentication routes

// Error handling middleware (optional, for better error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server setup
const PORT = 5000; // Define port directly
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
