// Call the packages
var express = require('express'); // Call express
var app = express(); // Define our app using express
var bodyParser = require('body-parser'); // Get body-parser
var morgan = require('morgan'); // Used to see requests
var mongoose = require('mongoose'); // For working w/ our database
var Lib = require('./lib.js');

// App Configuration
// Use body parser so we can grab information from POST requests
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configure our app to handle CORS requests
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//   next();
// });

// app.use(function (req, res, next) {
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });

// Log all requests to the console
app.use(morgan('dev'));

// Connect to our database
mongoose.connect('mongodb://dwh1996:compsci 4 lyfe@ds037244.mongolab.com:37244/heroku_dmb094g3');

// Set static files location
// Used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

app.post('/lib', function(req, res) {
  // Make the object
  var thelib = new Lib();

  // Set the stuff in the lib
  thelib.userName = req.param('userName');
  thelib.lib1 = req.param('lib1');
  thelib.lib2 = req.param('lib2');
  thelib.lib3 = req.param('lib3');
  thelib.lib4 = req.param('lib4');
  thelib.lib5 = req.param('lib5');

  Lib.remove({userName: thelib.userName},
    function(err, user) {
  });

  thelib.save(function(err) {
    if (err) res.send(err);

    res.json({message: 'Lib added'});
  });
});

app.get('/lib/:userName', function(req, res) {
  Lib.findOne({'userName': req.params.userName}, function(err, lib) {
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
app.listen(process.env.PORT);
