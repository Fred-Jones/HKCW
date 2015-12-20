var passport = require('passport');
var bcrypt = require('bcryptjs');
var hashmaster = require('../bcrypt/hashmaster.js')
var Promise = require('promise')
var User = require('../../app/models/mongoosemodels/user.js')

// var userSemilla = require('../app/models/user.semilla.js')('ElDon', 'LaContrasena', 'mmaammbbuu@gmail.com')
var strategies = require('./strategies.js')
strategies.forEach(function(s) { passport.use(s.name, s);})
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = function (app) {
  app.login = __login
  app.isAuthenticated = __is_authenticated
  app.logout = __logout
	app.signup = __signup
}

function __login(req, res, next) {

  passport.authenticate(req.body.authtype, {
    session: true
  }, function(err, user) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/signup'); }
    req.logIn(user, function(err) {
      if(err) {return next(err)}
      console.log('Authorized user ', user)
      res.redirect('/user')
    });
  })(req, res, next);
}
function __is_authenticated(req, res, next) {
  console.log('User authed? ', req.isAuthenticated())
  if(req.isAuthenticated()) {
    next()
    return
  }else{
    console.log('Unauthed**', req)
    res.render('error', {
      error: new Error('Unauthed')
    })
  }

}
function __logout(req, res) {
  console.log('__logout ', req.username)
  req.logout()
  res.redirect('/')
}
function __signup(req, res) {
	User.findOne({email: req.body.email}, function(err, user) {
    if(!err){
      var newparams = {}
      newparams['email'] = req.body.email
      newparams['username'] = req.body.username
      if(!user){
        if(req.body.password){
          newparams['password'] = bcrypt.hashSync(req.body.password, 10)
          var newuser = new User(newparams)
          newuser.save()
        }else{ res.redirect('/signup',{error:'password required'})}
      }else{
        next()
      }
      console.log('Initialized new user')
      res.redirect('/user')
    }
  })
}
function __good_for_wager(req, res, next)
 {
   req.isAuthenticated? __make: __log_Suspect_And_End(req, res, next)
 }

function __log_Suspect_And_End(req, res, next) {
  process.stdout.write('The funk is you doing trying to do make wager not logged in', req)
  res.end()
}

function __create_New_Password() {
  var pwdpromise = new Promise(function(rv, rj) {
    // bcrypt.hash
    rv()
  })
}
