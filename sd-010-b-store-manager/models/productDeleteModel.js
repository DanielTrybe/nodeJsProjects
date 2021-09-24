const { ObjectID } = require('mongodb');
const { getConnection } = require('./connection');

const productDelete = async (id) => {
  const db = await getConnection();
  await db.collection('products').deleteOne({ _id: ObjectID(id) });
};

module.exports = { productDelete };
