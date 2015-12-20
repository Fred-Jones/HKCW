

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var mongo_models = glob.sync(config.root + '/app/models/mongoosemodels/*.js');
mongo_models.forEach(function (model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);
var sock = require('./mods/io/socket_test.js')(app, config.port)// app.listen called from this module
