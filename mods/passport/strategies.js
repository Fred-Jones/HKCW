var LocalStrategy = require('passport-local').Strategy,
 OAuthStrategy = require('passport-oauth').OAuthStrategy,
 OpenIDStrategy = require('passport-openid'),
 TwitterStrategy = require('passport-twitter');
var User = require('../app/models/user.js');
var bc = require('bcryptjs')
// var adminbc = require('../app/models/user\.admin\.semilla\.js')

module.exports = [
//forEach() iterable object -> return new __Strategy()
  new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
          console.log('user not found', user, password)
        }
        //needs bcrypt
        if (bc.compareSync(password, user.password)) {
          console.log(user, password)
          return done(null, user);
        }else{
            console.log('ERROR--\n',user, password)
            return done(null, false, { message: 'Incorrect password.' });
        }
      });
    }
  )//,
  // OAuthStrategy: new OAuthStrategy(new OAuthStrategy(function() {})),
  // OpenIDStrategy: new OpenIDStrategy(),
  // TwitterStrategy: new TwitterStrategy()
]

