var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body ='Hello World';
});

app.listen(8000, () => console.log('Listening'));