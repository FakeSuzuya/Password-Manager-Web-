const connectDB = require('../config/db');

const createUser = async (name, email, hashedPassword) => {
  const connection = await connectDB();
  const [result] = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  await connection.end();
  return result.insertId;
};

const findUserByEmail = async (email) => {
  const connection = await connectDB();
  const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  await connection.end();
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail
};
