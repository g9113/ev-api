const express = require("express");
const {bootcampCreation, deleteBootcamp, getBootcamps} = require("../controllers/BootCamp");
const router = express.Router();

router.post("/createbootcamp", bootcampCreation);
router.post("/deletebootcamp/:id", deleteBootcamp);
router.get("/getallbootcamp", getBootcamps);

module.exports = router;
