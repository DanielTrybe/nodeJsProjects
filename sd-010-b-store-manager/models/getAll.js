const { ObjectID } = require('mongodb');
const mongoConnection = require('./connection');

const getAll = async () => {
  const db = await mongoConnection.getConnection();
  const products = await db.collection('products')
    .find()
    .toArray();

  return products;
};

const getOne = async (id) => {
  const db = await mongoConnection.getConnection();
  const finded = await db.collection('products').findOne(ObjectID(id));
  return finded;
};

const getAllSales = async () => {
  const db = await mongoConnection.getConnection();
  const finded = await db.collection('sales').find().toArray();
  return finded;
};

const getOneSale = async (id) => {
  const db = await mongoConnection.getConnection();
  const finded = await db.collection('sales').findOne(ObjectID(id));
  return finded;
};

module.exports = { getAll, getOne, getAllSales, getOneSale };