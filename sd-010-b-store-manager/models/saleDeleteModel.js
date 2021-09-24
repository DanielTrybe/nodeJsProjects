const { ObjectID } = require('mongodb');
const { getConnection } = require('./connection');

const deleteModel = async (id) => {
  const db = await getConnection();
  await db.collection('sales').deleteOne({ _id: ObjectID(id) });
};

module.exports = { deleteModel };
