const express = require("express");
const EventController = require("../controllers/LiveEvents");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

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

module.exports = router;
