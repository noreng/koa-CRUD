'use strict';

let items = [];

const getNextId = (function () {
  var id = 1;
  return () => id++;
})();

const addItem = (name) => {
  items.push({
    id: getNextId(),
    name
  });
};

const updateItem = (id, name) => {
  id = Number(id);
  items.map((item) => {
    if (item.id === id) {
      item.name = name;
    }
  });
};

const removeItem = (id) => {
  id = Number(id);
  items = items.filter((item) => item.id !== id);
};

addItem('First Item');
addItem('Second Item'); 
addItem('Third Item');

const model = {
  create: function *() {
    var item = this.request.body;
    addItem(item.name);
    this.body = items;
  },
  read: function *() {
    this.body = items;
  },
  update: function *(id) {
    var newName = this.request.body.name;
    updateItem(id, newName);
    this.body = items;
  },
  remove: function *(id) {
    removeItem(id);
    this.body = items;
  }
};

module.exports = model;