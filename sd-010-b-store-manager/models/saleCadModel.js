const mongoConnection = require('./connection');

const cadastrarOneModel = async (itens) => {
  const db = await mongoConnection.getConnection();
  const { insertedId: _id } = await db.collection('sales').insertOne({ itensSold: itens });
  return { _id, itensSold: itens };
};

module.exports = { cadastrarOneModel };
