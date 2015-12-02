// Call the packages
var express = require('express'); // Call express
var app = express(); // Define our app using express
var bodyParser = require('body-parser'); // Get body-parser
var morgan = require('morgan'); // Used to see requests
var mongoose = require('mongoose'); // For working w/ our database
var Lib = require('./lib.js');

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
mongoose.connect('localhost:27017/test');

// Set static files location
// Used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

app.post('/lib', function(req, res) {
  // Make the object
  var thelib = new Lib();

  // Set the stuff in the lib
  thelib.userName = req.body.userName;
  thelib.meanLib = req.body.meanLib;

  thelib.remove({userName: req.params.userName},
    function(err, user) {
  });

  thelib.save(function(err) {
    res.json({message: 'Lib added'});
  });
});

app.get('/lib/:userName', function(req, res) {
  User.findById(req.params.userName, function(err, lib) {
    if (err) res.send(err);

    // Return the lib
    res.json(lib);
  });
});

// Main catchall routes
// Send users to frontend
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the server
app.listen(8080);
console.log('Magic happens on port 8080');
