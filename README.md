# koa-CRUD

## CURL commands to test
### Create
```bash
curl --data '{"create": "item"}' http://localhost:8000/api/create -H 'content-type:application/json'
```

### Read
```bash
curl -H 'content-type:application/json' http://localhost:8000/api/read
```

### Update
```bash
curl -X 'PUT' --data '{"update": "item"}' -H 'content-type:application/json' http://localhost:8000/api/update/8888
```

### Delete
```bash
curl  -X 'DELETE' http://localhost:8000/api/delete/9999 -H 'content-type:application/json'
```