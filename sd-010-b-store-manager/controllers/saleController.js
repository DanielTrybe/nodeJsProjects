const { cadastrarServ } = require('../services/saleServ');

const cadastrar = async (req, res) => {
  const itens = req.body;
  const cadastrado = await cadastrarServ(itens);
  if (cadastrado === false) {
    return res.status(422).json({ 
      err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    });
  }
  return res.status(200).json(cadastrado);
};

module.exports = { cadastrar };
