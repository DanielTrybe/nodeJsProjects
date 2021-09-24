const { updateService } = require('../services/saleUpdateService');

const err = { err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' } };
const updateSale = async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  const upOk = await updateService(id, item);
  if (upOk === false) return res.status(422).json(err);
  return res.status(200).json(upOk);
};

module.exports = { updateSale };
