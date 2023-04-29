const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user');
const Restaurant = require('./restaurant');

const Reservation = sequelize.define('reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  restaurant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Restaurant,
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  starting_time: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Reservation;
