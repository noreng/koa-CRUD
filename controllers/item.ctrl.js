'use strict';

const itemModel = require('../models/item.model');

exports.create = function *() {
  var item = this.request.body;
  itemModel.addItem(item.name);
  this.body = itemModel.getItems();
};

exports.read = function *() {
  this.body = itemModel.getItems();
};

exports.update = function *(id) {
  var newName = this.request.body.name;
  itemModel.updateItem(id, newName);
  this.body = itemModel.getItems();
};

exports.remove = function *(id) {
  itemModel.removeItem(id);
  this.body = itemModel.getItems();
};