const jwt = require('jsonwebtoken');
const { loginService } = require('../services/loginService');

const secret = 'secreto';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tryLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService(email, password);
  if (typeof user === 'string') {
    return res.status(401).json({ message: user });
  }
  const { _id, name, role } = user;
  const token = jwt.sign({ _id, name, email, role }, secret, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = { tryLogin };