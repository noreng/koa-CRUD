const model = {
  create: function *() {
    this.body = [];
  },
  read: function *() {
    this.body = [];
  },
  update: function *(id) {
    this.body = id;
  },
  remove: function *(id) {
    this.body = id;
  }
};

module.exports = model;