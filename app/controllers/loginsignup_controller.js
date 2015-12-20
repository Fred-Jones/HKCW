var express = require('express')
var passport = require('passport')

// var clearTextDB = require('../../.tocleandir/clearTextDB.js')
// var CWclearTextDB = new clearTextDB()
module.exports = function(app){

  app.get('/login/', app.login, function(req, res, nxt) {

  })
  app.get('/logout')
  app.get('/atrium' + , function(req, res, nxt) {
    res.render('atrium')
    nxt()
  })
  app.post('/signup', app.signupfunction(req, res, nxt) {

  })
}
