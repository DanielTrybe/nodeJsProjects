const productService = require('../services/productService');

const createContr = async (req, res) => {
const { name, quantity } = req.body;
const product = await productService.createServ({ name, quantity });

if (typeof product === 'string') {
return res
.status(422).json({ err: { code: 'invalid_data', message: product } });
}

res.status(201).json(product);
};

module.exports = {
createContr,
};