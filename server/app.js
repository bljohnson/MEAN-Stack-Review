var express = require('express');
var app = express();
var path = require('path');

// spin up server
app.listen(3000, 'localhost', function (req, res) {
  console.log('Now serving 3000');
});
