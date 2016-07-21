'use strict';

const pg = require('co-pg')(require('pg'));

const connection_url = 'postgres://postgres:postgres@localhost/koa_crud';

exports.query = function* (sql) {
  let client = new pg.Client(connection_url);
  yield client.connectPromise();
  let result = yield client.queryPromise(sql);
  client.end();
  return result.rows;
};