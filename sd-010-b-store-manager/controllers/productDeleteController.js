const { ObjectID } = require('mongodb');
const { productDelete } = require('../models/productDeleteModel');

const exclude = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  if (!ObjectID.isValid(id)) {
    return res
    .status(422).json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
  }
  await productDelete(id);
  return res.status(200).json({ _id: id, name, quantity });
};

module.exports = { exclude };
