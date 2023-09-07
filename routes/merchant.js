const express = require('express');
const { addMemes, deleteProduct, getProducts } = require('../controllers/merchant');
const router = express.Router();

router.get('/getMemes', getProducts);
router.post('/addMemes', addMemes);
router.post('/deleteMemes', deleteProduct);

module.exports = router;
