var Wager = require('../models/mongoosemodels/wager.js')
var User = require('../models/mongoosemodels/user.js')
var gridMid = require('../../mods/gridfs/returngridurlforpic.js')

module.exports = function(app) {
  //-var <base> = '/user/acct/#{menuroute}'
  //-var menuroutes = ['acceptable', 'initiated', 'resolved']
  app.get('/user/acct/acceptable', app.isAuthenticated, app.acceptable)
  app.get('/user/acct/resolved', app.isAuthenticated, function(req, res, next) {
    if (true){
    console.log(req.body, 'hello')
    res.render('resolved', {user: req.user})
  }else{
      throw new Error('bad usr/acct mid')
    }
  })
  app.get('/user/wager/initiate', app.isAuthenticated, function(req, res, next) {
    res.render('initiate', {})
  })

  app.post('/user/wager/initiate', app.isAuthenticated, function(req, res, next) {
    console.log(req.body)
    var friends_email = req.body.friendsEmail
    var initiator_email = req.user.email

    console.log('EMAIL TRYING TO INITIATE WAGER(initiator)', initiator_email)
    console.log('EMAIL ACCEPTING WAGER(acceptor)', friends_email)

    User.findOne({email: initiator_email}, function(err, user){
      console.log('user', user)
      User.findOne({email: 2}, function(err, friend) {
        var newwager = new Wager({
          initiator_mdb_id: friend._id,
          acceptor_mdb_id: user._id,
          ammount_wagered: ''
        })
        if(!err && friend){
          console.log('Friend ', friend)
          res.json({initiatesuccess: 'hello'})

        }else{
          if(process.env.NODE_ENV == 'development'){
            res.json({initiatesuccess: 'fucked'})
          }else {
            res.send('Error')
          }
        }
      })
    })



  })


  app.get('/user/acct/initiated', app.isAuthenticated, app.initiated)
  app.get('/user/wager/accept', app.isAuthenticated, app.accept)


}
