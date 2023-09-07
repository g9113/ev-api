const express = require('express');
const {
  BootcampCreation,
  createInternship,
  getBootcamps,
  getInterships,
  search,
  CreateCourese,
  getCoureses,
} = require('../controllers/client');
const router = express.Router();

router.get('/getBootcamps', getBootcamps);
router.get('/getInterships', getInterships);
router.get('/getCoureses', getCoureses);

router.get('/search/:searchTerm', search);

router.post('/createbootcamp', BootcampCreation);
router.post('/createInternship', createInternship);
router.post('/createCourese', CreateCourese);

module.exports = router;
