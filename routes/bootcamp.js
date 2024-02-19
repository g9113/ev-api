const express = require("express");
const {
  bootcampCreation,
  deleteBootcamp,
  getBootcamps,
  getBootcampsbyid,
  getBootcampslastest,
} = require("../controllers/BootCamp");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createbootcamp", authorize, bootcampCreation);
router.post("/deletebootcamp/:id", authorize, deleteBootcamp);
router.get("/getallbootcamp", authenticate, getBootcamps);
router.get("/getbootcamp/:id", authenticate, getBootcampsbyid);
router.get("/getlastestbootcamp", authenticate, getBootcampslastest);

module.exports = router;
