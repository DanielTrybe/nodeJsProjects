const { findUser } = require('../models/userModel');

const loginService = async (email, password) => {
  const user = await findUser(email);
  if (!user || password !== user.password) {
    return 'Incorrect username or password';
  } 
  return user;
};

module.exports = { loginService };