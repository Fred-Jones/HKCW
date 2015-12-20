var express = require('express'),
  mongoose = require('mongoose'),
  User= mongoose.model('User'),
  passportMods = require('../../mods/passport/passportmods.js'); //add passport mods

module.exports = function (app) {
  app.isAuthenticated = __isAuthenticated
  app.get('/', function (req, res, next) {
    res.render('index',{title: 'Crypto Wager'})
  });


};

function __isAuthenticated(req, res, next) {
  console.log('put authentication in passport')
  next()
}
