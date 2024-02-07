const express = require("express");
const ConferenceController = require("../controllers/Conferences");
const router = express.Router();

router.post("/createconferences", ConferenceController.createConference);
router.post("/deleteconferences/:id", ConferenceController.deleteConference);
router.get("/getallconferences", ConferenceController.getAllConferences);

module.exports = router;
