const { prodUpdateModel } = require('../models/prodUpdateModel');
const { isValid } = require('../services/productService');

const update = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const valid = await isValid(name, quantity);
  if (typeof valid === 'string') {
    return res
      .status(422).json({ err: { code: 'invalid_data', message: valid } });
  }
  const edited = await prodUpdateModel(id, name, quantity);
  return res.status(200).json(edited);
};

module.exports = { update };