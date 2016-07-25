'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost/koa_crud');

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.log('Unable to connect to the database:', err));
  
const Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync();

module.exports = Item;