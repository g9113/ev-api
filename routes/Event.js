const express = require("express");
const EventController = require("../controllers/Event");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.get("/getevent", authenticate, EventController.getEvents);
router.post("/createevent", authorize, EventController.createEvent);
router.post("/deleteevent/:id", authenticate, EventController.deleteEvent);
router.get("/getevent/:id", authenticate, EventController.getEventsbyid);
router.get("/getlastestevent", authenticate, EventController.getEventslastest);

module.exports = router;
