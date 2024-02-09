const express = require("express");
const ConferenceController = require("../controllers/Conferences");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createconferences",authorize, ConferenceController.createConference);
router.post("/deleteconferences/:id",authorize, ConferenceController.deleteConference);
router.get("/getallconferences",authenticate, ConferenceController.getAllConferences);

module.exports = router;
