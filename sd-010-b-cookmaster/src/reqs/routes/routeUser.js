const express = require('express');

const router = express.Router();

const { createUser } = require('../controllers/users');
const { verifyName, 
  verifyPassword, verifyEmail, findUserEmail } = require('../middleware/validations');

router.post('/', verifyName, verifyPassword, verifyEmail, findUserEmail, createUser);

module.exports = router;