const { findAll, findOne } = require('../services/findProdService');

const prodList = async (req, res) => {
  const all = await findAll();
  return res.status(200).json({ products: all });
};

const prodId = async (req, res) => {
  const { id } = req.params;
  const fOne = await findOne(id);
  if (typeof fOne === 'string') {
    return res
      .status(422).json({ err: { code: 'invalid_data', message: fOne } });
  }
  return res.status(200).json(fOne);
};

module.exports = { prodList, prodId };