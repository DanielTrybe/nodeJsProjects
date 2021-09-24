const bodyParser = require('body-parser');
const express = require('express');
// const path = require('path');
const routeUser = require('../reqs/routes/routeUser');
const routeLogin = require('../reqs/routes/routeLogin');
const routeReceitas = require('../reqs/routes/routeReceitas');

const app = express();

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(bodyParser.json());

// app.use('/', express.static(path.resolve('uploads')));
app.use('/users', routeUser);
app.use('/login', routeLogin);
app.use('/recipes', routeReceitas);

module.exports = app;
