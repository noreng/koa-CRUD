'use strict';

const items = require('../services/item.service');

exports.create = function* () {
  let item = this.request.body;
  yield items.addItem(item.name);
  this.body = yield items.getItems();
};

exports.read = function* () {
  this.body = yield items.getItems();
};

exports.update = function* (id) {
  let newName = this.request.body.name;
  yield items.updateItem(id, newName);
  this.body = yield items.getItems();
};

exports.remove = function* (id) {
  yield items.removeItem(id);
  this.body = yield items.getItems();
};