var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // global for whole file. must be at top of file before making any app calls (route declarations). allows us not have to use urlencodedbodyparser
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MeanReviewDb');
var Mean = require('../models/meanschema'); // require model file that creates petSchema

// spin up server
app.listen(3000, 'localhost', function (req, res) {
  console.log('Now serving 3000');
});

// base URL; console logs to Atom terminal since coming from server side
app.get('/', function (req, res) {
  console.log('in base URL');
  res.sendFile(path.resolve('views/index.html')); // gets this path and sends to base URL as response
});

app.post('/addMean', function (req, res) {
  console.log('in addMean');
  var objectToSave = {
    name: req.body.name,
    weight: req.body.weight
  }; // end objectToSave
  var newMean = Mean(objectToSave);
  newMean.save();
});

// make public folder static
app.use(express.static('public'));
