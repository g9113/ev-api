const express = require("express");
const router = express.Router();
const HackathonController = require("../controllers/Hackathon");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createhackathon", authorize, HackathonController.createHackathon);
router.post(
  "/deletehackathon/:id",
  authorize,
  HackathonController.deleteHackathon
);
router.get(
  "/getallhackathons",
  authenticate,
  HackathonController.getAllHackathons
);

router.get(
  "/gethackathon/:id",
  authenticate,
  HackathonController.getHackathonbyid
);

module.exports = router;
