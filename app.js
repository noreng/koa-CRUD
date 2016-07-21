'use strict';

const koa = require('koa');
const router = require('koa-route');
const bodyParser = require('koa-bodyparser');
const itemCtrl = require('./controllers/item.ctrl');

const app = koa();
const port = 8000;

app.use(bodyParser());

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

app.listen(port, () => console.log(`Listening on port ${port}`));