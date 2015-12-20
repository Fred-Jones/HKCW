var express = require('express'),
  mongoose = require('mongoose'),
  User= mongoose.model('User'),
  passportMods = require('../../mods/passport/passportmods.js'); //add passport mods

module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.render('index',{title: 'Crypto Wager'})
  });
  app.get('/atrium' , function (req, res, next) {
    res.render('atrium')
    next()
  })


};
