const express = require("express");
const EventController = require("../controllers/Event");
const router = express.Router();

router.get("/getevent", EventController.getEvents);
router.post("/createevent", EventController.createEvent);
router.post("/deleteevent/:id", EventController.deleteEvent);

module.exports = router;
