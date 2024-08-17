const mysql = require('mysql2/promise');
const config = require('config');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: config.get('mysqlHost'),
      user: config.get('mysqlUser'),
      password: config.get('mysqlPassword'),
      database: config.get('mysqlDatabase'),
    });

    console.log('MySQL connected...');
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
