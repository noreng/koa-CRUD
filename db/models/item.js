'use strict';

module.exports = function (sequelize, DataTypes) {
  let item = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return item;
};