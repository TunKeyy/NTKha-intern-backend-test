const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
router.post('/register', userController.Register);
router.get('/verify-account', userController.VerifyAccount);


module.exports = router;