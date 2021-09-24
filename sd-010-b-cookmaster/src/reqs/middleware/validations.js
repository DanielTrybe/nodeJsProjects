const { findUser } = require('../models/userModel');

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || !email.match(/\S+@\S+\.com/)) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const findUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const result = await findUser(email);
  if (result) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  next();
};

module.exports = { verifyName, verifyPassword, verifyEmail, findUserEmail };
