// Grab the packages that we need for the lib model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Lib Schema
var LibSchema = new Schema({
  userName: String,
  lib1: String,
  lib2: String,
  lib3: String,
  lib4: String,
  lib5: String
});

// Return the model
module.exports = mongoose.model('Lib', LibSchema);
