const { getAll, getOne } = require('../models/getAll');

const findAll = async () => {
  const allProducts = await getAll();
  return allProducts;
};

const findOne = async (id) => {
  if (id.length <= 23) return 'Wrong id format';
  const filtered = await getOne(id);
  return filtered;
};

module.exports = { findAll, findOne };