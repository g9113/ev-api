const express = require('express');
const { login, resetPassword, signUp } = require('../controllers/auth')
const router = express.Router();

router.post('/login', login);
router.post('/signup', signUp);
router.post('/resetPassword', resetPassword);

module.exports = router;
