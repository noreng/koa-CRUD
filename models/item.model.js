'use strict';

let query= require('../db/index').query;

exports.getItems = function* () {
  return yield query('SELECT * FROM items');
};

exports.addItem = function* (name) {
  let sql = `INSERT INTO items (name) VALUES ('${name}')`;
  return yield query(sql);
};

exports.updateItem = function* (id, name) {
  let sql = `UPDATE items SET name = '${name}' WHERE id = ${id}`;
  return yield query(sql);
};

exports.removeItem = function* (id) {
  let sql = `DELETE FROM items WHERE id = ${id}`;
  return yield query(sql);
};