const User = require('../models/users'); // Assuming your model is in a file named userModel.js
const learnerLicense = require('../models/learner'); // Assuming your model is in a file named userModel.js
const VehicleRegistration = require('../models/vehicle'); // Assuming your model is in a file named userModel.js
const licensemodel = require('../models/license'); // Assuming your model is in a file named userModel.js
async function createUser(req, res) {
  try {
    const { fullName, number, email, password } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ number }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with the provided number or email." });
    }

    const newUser = new User({ fullName, number, email, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


async function savelearnerlicense(req, res) {
    try {
      const userDetails = req.body;
      const newUser = new learnerLicense(userDetails);
      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error saving user details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  

  async function savelicenseDetails(req, res) {
    try {
      const licenseDetails = req.body;
  
      const license = new licensemodel(licenseDetails);
  
      await license.save();
  
      res.status(201).json({ message: "Vehicle details saved successfully", vehicle: license });
    } catch (error) {
      console.error("Error saving vehicle details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }



  async function saveVehicleRegistration(req, res) {
    try {
      const vehicleDetails = req.body;
  
      const newVehicleRegistration = new VehicleRegistration(vehicleDetails);
  
      await newVehicleRegistration.save();
  
      // Send a success response
      res.status(201).json({ message: "Vehicle registration details saved successfully", vehicleRegistration: newVehicleRegistration });
    } catch (error) {
      // If an error occurs, send a 500 response with the error message
      console.error("Error saving vehicle registration details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

module.exports = { createUser, loginUser  ,savelicenseDetails , saveVehicleRegistration,savelearnerlicense};
