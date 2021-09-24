const mongoConnection = require('./connection');

const createMod = async ({ name, quantity }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('products'));

  const { insertedId: _id } = await moviesCollection
    .insertOne({ name, quantity });

  return { _id, name, quantity };
};

module.exports = {
  createMod,
};