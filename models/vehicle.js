const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  state: { type: String, required: true },
  rto: { type: String, required: true },
  pincode: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  aadhaarNumber: { type: String, required: true },
  nprNumber: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  countries: { type: String, required: true },
  qualification: { type: String, required: true },
  bloodgrp: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  emergencyNumber: { type: String, required: true },
  vehicleRegistrationNumber: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  currentMileage: { type: Number, required: true },
  dealerName: { type: String, required: true }
});

const VehicleRegistration = mongoose.model('VehicleRegistration', vehicleSchema);

module.exports = VehicleRegistration;
