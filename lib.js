// Grab the packages that we need for the lib model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Lib Schema
var LibSchema = new Schema({
  userName: String,
  libFirst: String,
  libSecond: String,
  libThird: String,
  libFourth: String,
  libFifth: String
});

// Return the model
module.exports = mongoose.model('Lib', LibSchema);
