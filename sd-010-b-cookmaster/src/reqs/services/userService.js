const { insertUser } = require('../models/userModel');

const createUserService = async (name, email, password) => {
  // chamar model de busca
  const inserted = await insertUser(name, email, password);

  return (inserted);
};

module.exports = { createUserService };
