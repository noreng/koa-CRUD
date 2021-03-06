'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-route');
const bodyParser = require('koa-bodyparser');
const itemCtrl = require('./controllers/item.ctrl');
const db = require('./db');

const app = koa();
const port = 8000;

app.use(bodyParser());
app.use(serve(__dirname + '/client'));

app.use(function* (next) {
  try {
    yield next;
  } catch (err) {
    this.status = 500;
    this.body = 'Catastrophic error!';
    console.log(err);
  }
});

app.use(router.post('/api/create', itemCtrl.create));
app.use(router.get('/api/read', itemCtrl.read));
app.use(router.put('/api/update/:id', itemCtrl.update));
app.use(router.del('/api/delete/:id', itemCtrl.remove));

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  });