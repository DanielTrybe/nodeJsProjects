const productModel = require('../models/productModel');
const { getAll } = require('../models/getAll');

const isValid = async (name, quantity) => {
  const products = await getAll();
  const find = products.find((prod) => prod.name === name);
  if (name.length < 5) return '"name" length must be at least 5 characters long';
  if (quantity <= 0) return '"quantity" must be larger than or equal to 1';
  if (typeof quantity !== 'number') return '"quantity" must be a number';
  if (find !== undefined) return 'Product already exists';
  return true;
};

const createServ = async ({ name, quantity }) => {
  const isMovieValid = await isValid(name, quantity);

  if (typeof isMovieValid === 'string') return isMovieValid;

  const INSERTed = await productModel
    .createMod({ name, quantity });

  return INSERTed;
};

module.exports = {
  createServ,
  isValid,
};