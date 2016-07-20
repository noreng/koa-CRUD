
CREATE DATABASE koa_crud;
\connect koa_crud;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
)