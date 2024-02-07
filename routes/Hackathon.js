const express = require("express");
const router = express.Router();
const HackathonController = require("../controllers/Hackathon");

router.post("/createhackathon", HackathonController.createHackathon);
router.post("/deletehackathon/:id", HackathonController.deleteHackathon);
router.get("/getallhackathons", HackathonController.getAllHackathons);

module.exports = router;
