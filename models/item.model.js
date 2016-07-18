'use strict';

let items = [];

let getNextId = (function () {
  var id = 1;
  return () => id++;
})();

exports.getItems = function () {
  return items;
}

exports.addItem = function (name) {
  items.push({
    id: getNextId(),
    name
  });
};

exports.updateItem = function (id, name) {
  id = Number(id);
  items.map((item) => {
    if (item.id === id) {
      item.name = name;
    }
  });
};

exports.removeItem = function (id) {
  id = Number(id);
  items = items.filter((item) => item.id !== id);
};

exports.addItem('First Item');
exports.addItem('Second Item');
exports.addItem('Third Item');