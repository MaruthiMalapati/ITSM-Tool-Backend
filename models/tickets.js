const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ticket = sequelize.define('Ticket', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: { type: DataTypes.STRING, defaultValue: 'open' },
});

module.exports = Ticket;
