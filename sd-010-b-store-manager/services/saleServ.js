const { cadastrarOneModel } = require('../models/saleCadModel');

const cadastrarServ = async (itens) => {
  const valid = itens.some((item) => item.quantity <= 0 || typeof item.quantity !== 'number');
  if (valid === true) return false;
  const ok = await cadastrarOneModel(itens);
  return ok;
};

module.exports = { cadastrarServ };
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some