const express = require("express");
const EventController = require("../controllers/LiveEvents");
const router = express.Router();

router.get("/getliveevent", EventController.getliveEvents);
router.post("/createliveevent", EventController.createliveEvent);
router.post("/deleteliveevent/:id", EventController.deleteliveEvent);

module.exports = router;
