const { saleUpModel } = require('../models/saleUpdateModel');

const updateService = async (id, item) => {
  // const valid = item.some((itens) => itens.quantity <= 0 || typeof item.quantity !== 'number');
  if (item[0].quantity <= 0 || typeof item[0].quantity !== 'number') return false;
  if (id.length <= 23) return false;
  // if (valid === true) return false;
  const ok = await saleUpModel(id, item);

  return ok;
};

module.exports = { updateService };
