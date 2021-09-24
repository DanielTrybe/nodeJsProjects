const { getAllSales, getOneSale } = require('../models/getAll');

const err = { err: { code: 'not_found', message: 'Sale not found' } };
const getAllSale = async (req, res) => {
  const list = await getAllSales();
  if (list === null) {
    return res.status(422).json(err);
  } 
  return res.status(200).json({ sales: list });
};

const getOneSal = async (req, res) => {
  const { id } = req.params; 
  const list = await getOneSale();
  if (id.length <= 23) return res.status(404).json(err);
  if (list === null) {
    return res.status(404).json(err);
  }
  return res.status(200).json(list);
};

module.exports = { getAllSale, getOneSal };