# nodejs-memcached

Memcached POC as simple as possible

## Install and run

### Docker

- `cd docker`
- `docker-compose -f memcached.yml -p memcached-container up -d`

### Server

- `cd server`
- `npm install`
- `npm run start`

---

## Routes

POST profile

```
curl --request POST \
  --url http://localhost:3000/profile \
  --header 'Content-Type: application/json' \
  --data '{
  "id": 123456,
  "name": "John Rambo",
  "active": true
}'
```

GET profile

```
curl --request GET \
  --url http://localhost:3000/profile
```
