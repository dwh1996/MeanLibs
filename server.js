// Call the packages
var express = require('express'); // Call express
var app = express(); // Define our app using express
var bodyParser = require('body-parser'); // Get body-parser
var morgan = require('morgan'); // Used to see requests
var mongoose = require('mongoose'); // For working w/ our database
var config = require('./config');
var path = require('path');

// App Configuration
// Use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

// Log all requests to the console
app.use(morgan('dev'));

// Connect to our database
mongoose.connect(config.database);

// Set static files location
// Used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));
