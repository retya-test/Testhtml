var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Alphien Alphien 4Ecap');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
