const mongoose = require('mongoose');

// Define a schema for the user model
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
    unique: true // Assuming the number should be unique
  },
  email: {
    type: String,
    required: true,
    unique: true // Assuming the email should be unique
  },
  password: {
    type: String,
    required: true
  }
});

// Create a mongoose model using the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
