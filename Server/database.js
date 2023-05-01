/*
Where the credentials are stored and the port is declared.
*/

const { Sequelize } = require('sequelize');

// MySQL credentials
const dbConfig = {
  host: 'localhost',
  username: 'root',
  password: '123',
  database: 'where2eat'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: 3307,
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
