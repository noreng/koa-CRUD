# koa-CRUD

## Setup postgreSQL database
1. Install [PostgreSQL](https://www.postgresql.org/download/)
2. Setup the database with `psql -U postgres -a -f db/schema.sql`
3. Enjoy!

## CURL commands to test
### Create
```bash
curl --data '{"name": "New Item"}' http://localhost:8000/api/create -H 'content-type:application/json'
```

### Read
```bash
curl -H 'content-type:application/json' http://localhost:8000/api/read
```

### Update
```bash
curl -X 'PUT' --data '{"name": "Updated item"}' http://localhost:8000/api/update/1 -H 'content-type:application/json' 
```

### Delete
```bash
curl  -X 'DELETE' http://localhost:8000/api/delete/2 -H 'content-type:application/json'
```