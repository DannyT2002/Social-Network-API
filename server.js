// Import dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize the app and define a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use(require('./routes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log MongoDB queries
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
