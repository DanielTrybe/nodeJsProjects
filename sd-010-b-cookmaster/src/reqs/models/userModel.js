const { getConnection } = require('../connection/connection');

const findUser = async (email) => {
  const db = await getConnection();
  const result = await db.collection('users').findOne({ email });
  return result;
};

const insertUser = async (name, email, password) => {
  const db = await getConnection();
  const { insertedId: _id } = db.collection('users')
    .insertOne({ name, email, password, role: 'user' });

  const userOk = { user: { name, email, role: 'user', _id } };
  return userOk;
};

module.exports = { findUser, insertUser };