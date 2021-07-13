var express = require("express");
var app = express();

var Memcached = require("memcached");
var memcached = new Memcached();

var _HOST = "localhost:11211";
memcached.connect(_HOST, function (error, connection) {
  if (error) throw new Error(error);
  console.log(connection.server);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/profile", function (req, res, next) {
  // store for 10 seconds
  memcached.set("profile", req.body, 10, function (error) {
    if (error) {
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});

app.get("/profile", function (req, res, next) {
  memcached.get("profile", function (error, data) {
    if (error) {
      res.sendStatus(500);
    }
    res.send(data);
  });
});

module.exports = app;
