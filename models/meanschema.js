var mongoose = require('mongoose');
var Schema = mongoose.Schema; // enable use of schema property

// create petSchema with chosen fields and data type, let MongoDB handle generating _id for each instance
var meanSchema = new Schema ({
  name: String,
  weight: Number
}); // end meanSchema

var Mean = mongoose.model('meancollection', meanSchema); // creates model from meanSchema called Mean, and stores in meancollection 'collection' of docs within MeanReviewDb

module.exports = Mean;
