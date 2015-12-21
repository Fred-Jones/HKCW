var Wager = require('../models/mongoosemodels/wager.js')
var User = require('../models/mongoosemodels/user.js')
var gridMid = require('../../mods/gridfs/returngridurlforpic.js')
var genUniqueWagerId = require('../../mods/mung/genuniqueid.js')
var getEmailFromId = require('../../mods/mung/returnemailfromid.js')

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
    var wager_description = req.body.wagerDescription || 'No description'

    console.log('EMAIL TRYING TO INITIATE WAGER(initiator)', initiator_email)
    console.log('EMAIL ACCEPTING WAGER(acceptor)', friends_email)

    User.findOne({email: initiator_email}, function(err, initiator){

      console.log('Initiator', initiator)

      User.findOne({email: friends_email}, function(err, friend) {
        if(!friend) {res.send('That friends email doesnt exist'); return;}
        var unique = genUniqueWagerId('wager')
        var auth = req.body.authtype || 'test auth'
        console.log('Acceptor', friend)
        var newwager = new Wager({
          meta: {
            unique_id: unique,
            initiator_mdb_id: initiator._id,
            acceptor_mdb_id: friend._id,
            currency: 'bc',
            auth: auth,
            ammount_wagered: req.body.ammount || 'test ammount',


          },
          params: {
            description: wager_description

          }

        })
        if(!err && friend){
          console.log('pushing to Friend ', friend)
          console.log('pushing wager to iniator', initiator)
          //APPENDS WAGER TO USER TWICE IF INITIATOR._id == FRIEND._id
          friend.wagers.push(JSON.stringify(newwager.meta))
          friend.save()//newwager.meta
          initiator.wagers.push(JSON.stringify(newwager.meta))
          initiator.save()

          Wager.findOne({unique_id: unique}, function(err, exists) {
            if(!err && !exists){
              newwager.save()

            }else{throw new Error('something wrong saving wager')}
          })
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
  app.get('/user/wager/accept', app.isAuthenticated, app.accpt)


}
