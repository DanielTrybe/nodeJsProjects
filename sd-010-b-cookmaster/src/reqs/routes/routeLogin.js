const express = require('express');

const router = express.Router();
const { verifyPassword, verifyEmail } = require('../middleware/validationsLogin');
const { tryLogin } = require('../controllers/login');

router.post('/', verifyEmail, verifyPassword, tryLogin);

module.exports = router;