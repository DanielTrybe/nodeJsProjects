const { ObjectID } = require('mongodb');
const { deleteModel } = require('../models/saleDeleteModel');

const excludeSale = async (req, res) => {
  const { itensSold } = req.body;
  const { id } = req.params;
  if (!ObjectID.isValid(id)) {
    return res
    .status(422).json({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
  }
  await deleteModel(id);
  return res.status(200).json({ _id: id, itensSold });
};

module.exports = { excludeSale };
