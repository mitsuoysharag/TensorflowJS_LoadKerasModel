var express = require('express')
app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});