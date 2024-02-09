const express = require("express");
const {bootcampCreation, deleteBootcamp, getBootcamps} = require("../controllers/BootCamp");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

router.post("/createbootcamp", authorize, bootcampCreation);
router.post("/deletebootcamp/:id",authorize, deleteBootcamp);
router.get("/getallbootcamp", authenticate, getBootcamps);

module.exports = router;
