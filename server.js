require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Initialize the app and set up the port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes folder
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log Mongo queries being executed
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
