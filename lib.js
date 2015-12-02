// Grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// User Schema
var LibSchema = new Schema({
  firstWord: String,
  secondWord: String,
  thirdWord: String,
  fourthWord: String,
  fifthWord: String
});

// Return the model
module.exports = mongoose.model('Lib', LibSchema);
