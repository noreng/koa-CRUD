const koa = require('koa');
const router = require('koa-route');
const model = require('./model');

const app = koa();
const port = 8000;

app.use(router.post('/api/create', model.create));
app.use(router.get('/api/read', model.read));
app.use(router.put('/api/update/:id', model.update));
app.use(router.del('/api/delete/:id', model.remove));

app.listen(port, () => console.log(`Listening on port ${port}`));