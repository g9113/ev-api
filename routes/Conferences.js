const express = require("express");
const ConferenceController = require("../controllers/Conferences");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createconferences",authorize, ConferenceController.createConference);
router.post("/deleteconferences/:id",authorize, ConferenceController.deleteConference);
router.get("/getallconferences",authenticate, ConferenceController.getAllConferences);
router.get("/getconferences/:id",authenticate, ConferenceController.getconferencebyid);

module.exports = router;
