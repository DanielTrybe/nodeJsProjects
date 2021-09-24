const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const saleUpModel = async (id, item) => {
  const db = await getConnection();
  await db.collection('sales').updateOne(
    { _id: ObjectId(id) }, { $set: { itensSold: item } },
    );
    const final = { _id: id, itensSold: item };
    return final;
};

module.exports = { saleUpModel };
