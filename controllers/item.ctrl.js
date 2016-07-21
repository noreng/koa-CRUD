'use strict';

const itemModel = require('../models/item.model');

exports.create = function* () {
  let item = this.request.body;
  yield itemModel.addItem(item.name);
  this.body = yield itemModel.getItems();
};

exports.read = function* () {
  this.body = yield itemModel.getItems();
};

exports.update = function* (id) {
  let newName = this.request.body.name;
  yield itemModel.updateItem(id, newName);
  this.body = yield itemModel.getItems();
};

exports.remove = function* (id) {
  yield itemModel.removeItem(id);
  this.body = yield itemModel.getItems();
};