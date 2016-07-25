'use strict';

let Item = require('../db/index').item;

exports.getItems = function* () {
  return yield Item.findAll({
    attributes: ['id', 'name']
  });
};

exports.addItem = function* (name) {
  return yield Item.create({
    name: name
  });
};

exports.updateItem = function* (id, name) {
  return yield Item.update({
    name: name
  }, {
    where: {
      id: id
    }
  });
};

exports.removeItem = function* (id) {
  return yield Item.destroy({
    where: {
      id: id
    }
  });
};