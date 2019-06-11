var model = require("./model.json")
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});

app.get('/model.json', function (req, res) {
  res.send(model);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});