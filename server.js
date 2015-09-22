var bcrypt = require('bcrypt');
var express = require('express');
var path = require('path');
var app = express();
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var $ = require('jQuery');




var storeUser = {};
var elements = [];

app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-headers", "Origin, X-Requested-With", "Content-Type, Accept");
  res.header("access-control-allow-methods");
  next();
});

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/script'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);

app.get('/', function(req, res) {
  res.redirect('signup.html');
});

app.get('/signup', function(req, res) {
  res.redirect('signup.html');
});

app.get('/pictures', function(req, res) {
  res.redirect('pictures.html');
});

app.post('/signup', function(req, res) {
  res.send(req.body.photo);
  
  bcrypt.hash(req.body.password, 8, function(err, hash) {
    
  storeUser = {
    username: req.body.username,
    password: {
      password: hash,
      photos: []
    }
  };
  console.log(storeUser);
  });
});

// var headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10,
//   "Content-Type": "application/json" // Seconds.
// };
