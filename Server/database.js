const { Sequelize } = require('sequelize');

// Replace these values with your actual MySQL database credentials
const dbConfig = {
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '123',
  database: 'where2eat'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  logging: false // Set to true if you want to see SQL logs
});

module.exports = sequelize;
