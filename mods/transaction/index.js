// APP>ACCEPTABLE should handle
var User = require('../../app/models/mongoosemodels/user.js')
var Wager = require('../../app/models/mongoosemodels/wager.js')
var getEmailFromId = require('../../mods/mung/returnemailfromid.js')

module.exports = function(app) {
  app.accpt = __accept
  app.acceptable = __acceptable_test
  // app.initiate = __initiate
  app.initiated = __initiated_test
  app.resolve = __resovle
  app.resolved = __resolved
}

function __accept(req, res, next) {
  User.findOne({email: req.email}, function(err, user) {
    if(req.method.toLowerCase() == 'POST'.toLowerCase()) {
      //complete the transaction
      res.render('accept', {user: user})
    }
    if(req.method.toLowerCase() == 'GET'.toLowerCase()){
      res.render('accept', {user: user})
    }
  })

}
function __acceptable_test(req, res, next) {
  //SHOULD FIND INITIATED WAGERS BEFORE RENDERING
  console.log('acceptable test')
  User.findOne({
    email: req.user.email
  },function(err, user) {
    if(!err && user){
      var wagers = user.wagers
      var all_wagers = []
      var acceptable_wagers = []
      var initiatorid = []

      for (i=0; i< wagers.length; i++){

         if(JSON.parse(wagers[i]).acceptor_mdb_id == user._id){
           //only puch some info to user, ok for now
          //  var pp = getEmailFromId(User, (JSON.parse(wagers[i]).acceptor_mdb_id))
          //   pp.then(function(err, accemail) {
          //       var to_push = {
          //        acceptorEmail: accemail,
          //        uid: JSON.parse(wagers[i]).unique_id,
          //        description: JSON.parse(wagers[i]).description,
          //        ammount: JSON.parse(wagers[i]).ammount_wagered,
          //        auth: JSON.parse(wagers[i]).auth
          //      }
          //      initiated_wagers.push(to_push)
          //  })
          acceptable_wagers.push(JSON.parse(wagers[i]))
          initiatorid.push(JSON.parse(wagers[i]).initiator_mdb_id)
         }
      }
      res.render('acceptable', {wagers: {acceptable_wagers: acceptable_wagers || 'None', initiatorid: initiatorid}})
    }else{
      res.render('acceptable', {wagers: ['No User Found']})
    }
  })
}

function __initiated_test(req, res, next) {
  //SHOULD FIND INITIATED WAGERS BEFORE RENDERING
  User.findOne({
    email: req.user.email
  },function(err, user) {
    if(!err && user){
      var wagers = user.wagers
      var all_wagers = []
      var initiated_wagers = []
      var acceptorid = []

      for (i=0; i< wagers.length; i++){

         if(JSON.parse(wagers[i]).initiator_mdb_id == user._id){
           //only puch some info to user, ok for now
          //  var pp = getEmailFromId(User, (JSON.parse(wagers[i]).acceptor_mdb_id))
          //   pp.then(function(err, accemail) {
          //       var to_push = {
          //        acceptorEmail: accemail,
          //        uid: JSON.parse(wagers[i]).unique_id,
          //        description: JSON.parse(wagers[i]).description,
          //        ammount: JSON.parse(wagers[i]).ammount_wagered,
          //        auth: JSON.parse(wagers[i]).auth
          //      }
          //      initiated_wagers.push(to_push)
          //  })
          initiated_wagers.push(JSON.parse(wagers[i]))
          acceptorid.push(JSON.parse(wagers[i]).acceptor_mdb_id)
         }
      }
      console.log('initiated wagers******', initiated_wagers)
      res.render('initiated', {wagers: {initiated_wagers: initiated_wagers || 'None', acceptorid: acceptorid}})
    }else{
      console.log('**Error or no user found for initiated**\n', req.user)
      res.render('initiated', {wagers: ['No User Found']})
    }
  })
}
function __resovle(req, res, next) {
  next()
}
function __resolved(req, res, next) {
  next()
}
