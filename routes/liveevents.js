const express = require("express");
const EventController = require("../controllers/LiveEvents");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const AdminModel = require("../models/bookingmodel")
router.get("/getliveevent", authorize, EventController.getliveEvents);
router.post("/createliveevent", authorize, EventController.createliveEvent);
router.post(
  "/deleteliveevent/:id",
  authenticate,
  EventController.deleteliveEvent
);
router.get(
  "/getliveevent/:id",
  authenticate,
  EventController.getLiveEventbyid
);
router.get(
  "/getlastestliveevent",
  authenticate,
  EventController.getliveEventslastest
);


router.post('/insertData', async (req, res) => {
  try {
    const { price, name, phone, stationName, time, date, address, admin } = req.body;

    // Create a new AdminModel instance with the data from the request body
    const newAdmin = new AdminModel({
      price,
      name,
      phone,
      stationName,
      time,
      date,
      address,
      admin,
    });

    // Save the new admin data to the database
    await newAdmin.save();

    res.status(201).json({ message: 'Data inserted successfully', data: newAdmin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to get booking by phone number
router.get('/bookingByPhoneNumber/:phoneNumber', async (req, res) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const booking = await AdminModel.findOne({ phone: phoneNumber });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET route to get booking by admin ID
router.get('/bookingByAdminId/:adminId', async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const booking = await AdminModel.findOne({admin:adminId});
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
