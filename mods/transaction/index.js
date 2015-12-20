// APP>ACCEPTABLE should handle
var User = require('../../app/models/mongoosemodels/user.js')
var Wager = require('../../app/models/mongoosemodels/wager.js')

module.exports = function(app) {
  app.accept = __accept
  app.acceptable = __acceptable
  // app.initiate = __initiate
  app.initiated = __initiated
  app.resolve = __resovle
  app.resolved = __resolved
}

function __accept(req, res, next) {
  User.findOne({email: req.email}, function(err, user) {
    res.render('accept', {user: user})
  })

}
function __acceptable(req, res, next) {
  //GET THE USERS ACCEPTABLES
  req.email = req.user.email
  console.log('acceptee this user', req.email, req.user.email)
  User.findOne({
    email: req.email
  }, function(err, user) {
    if (!user){throw new Error('No user', user)}
    if (err) {
      throw new Error('Error no user found')

    }else if(!err){
        // console.log(user, 'hello from acceptable cb')
        // res.render('acceptable')
        res.render('acceptable', {wagers: user.wagers || ['none']})
    }

  })
}

function __initiate(req, res, next) {


}
function __initiated(req, res, next) {
  User.findOne({email: req.user.email},function(err, user) {
    res.send()
  })
}
function __resovle(req, res, next) {
  next()
}
function __resolved(req, res, next) {
  next()
}
