const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const prodUpdateModel = async (id, name, quantity) => {
  const db = await getConnection();
  await db.collection('products').updateOne(
    { _id: ObjectId(id) }, { $set: { name, quantity } },
    );
    return { id, name, quantity };
};

module.exports = { prodUpdateModel };
