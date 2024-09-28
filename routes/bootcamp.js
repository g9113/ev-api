const express = require("express");
const {
  bootcampCreation,
  deleteBootcamp,
  getBootcamps,
  getBootcampsbyid,
  getBootcampslastest,
} = require("../controllers/BootCamp");
const { createUser , loginUser , saveVehicleRegistration, savelicenseDetails, savelearnerlicense } = require("../controllers/usercontroller");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createbootcamp", authorize, bootcampCreation);
router.post("/deletebootcamp/:id", authorize, deleteBootcamp);
router.get("/getallbootcamp", authenticate, getBootcamps);

router.get("/getbootcamp/:id", authenticate, getBootcampsbyid);
router.get("/getlastestbootcamp", authenticate, getBootcampslastest);


router.post("/createuser", createUser);
router.post("/login", loginUser);
router.post("/savevehicle", saveVehicleRegistration);
router.post("/savelicense", savelicenseDetails);
router.post("/savelearnerlicense", savelearnerlicense);

module.exports = router;
