const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');
const productListController = require('./controllers/productListController');
const productUpdateController = require('./controllers/productUpdateController');
const productDeleteController = require('./controllers/productDeleteController');
const saleController = require('./controllers/saleController');
const saleGetController = require('./controllers/saleGetController');
const saleUpdateController = require('./controllers/saleUpdateController');
const saleDeleteController = require('./controllers/saleDeleteController');

const app = express();
app.use(bodyParser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', productController.createContr);
app.get('/products', productListController.prodList)
  .get('/products/:id', productListController.prodId);
app.put('/products/:id', productUpdateController.update);
app.delete('/products/:id', productDeleteController.exclude);
app.post('/sales', saleController.cadastrar);
app.get('/sales', saleGetController.getAllSale)
  .get('/sales/:id', saleGetController.getOneSal);
app.put('/sales/:id', saleUpdateController.updateSale);
app.delete('/sales/:id', saleDeleteController.excludeSale);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000');
});