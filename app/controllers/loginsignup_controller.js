var express = require('express')
var passport = require('passport')

// var clearTextDB = require('../../.tocleandir/clearTextDB.js')
// var CWclearTextDB = new clearTextDB()
module.exports = function(app){

  app.get('/login', function(req, res, next) {
    res.render('login')
  })
  app.post('/login', app.login, function(req, res, next) {
    res.redirect('/user')
  })
  app.get('/signup', function(req, res, next) {
    res.render('signup')
  })
  app.post('/signup', app.signup, function(req, res, next) {
    res.redirect('/user', {welcomemessage: 'Welcome New '})
  })
  app.get('/logout', app.logout)
}
