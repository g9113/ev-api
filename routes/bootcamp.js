const express = require("express");
const BootCampController = require("../controllers/BootCamp");
const router = express.Router();

router.post("/createbootcamp", BootCampController.bootcampCreation);
router.post("/deletebootcamp/:id", BootCampController.deleteBootcamp);
router.get("/getallbootcamp", BootCampController.getBootcamps);

module.exports = router;
