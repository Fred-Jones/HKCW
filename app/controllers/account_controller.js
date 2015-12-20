var Wager = require('../models/mongoosemodels/wager.js')

module.exports = function(app) {
  //-var <base> = '/user/acct/#{menuroute}'
  //-var menuroutes = ['acceptable', 'initiated', 'resolved']
  app.get('/user/acct/acceptable', app.isAuthenticated, function(req, res, next) {
    //FIND USER MONGO, FIND ACCEPTABLEID OF USE,RENDER ACCEPTABLE VIEW WITH ALL ACCEPTABLE WAGERS
    if(req.user){
    console.log(req.body, 'hello from acceptable cb')
    req.render('acceptable', {user:{
                                    acceptables: 'all acceptable wagers'
                                }
    })
  }else{
    throw new Error('user not authenticated to access accept')
    }
  })
  app.get('/user/acct/resolved', app.isAuthenticated, function(req, res, next) {
    if (true){
    console.log(req.body, 'hello')
    res.render('resolved', {user: req.user})
  }else{
      throw new Error('bad usr/acct mid')
    }
  })
  app.get('/user/wager/initiate', app.isAuthenticated, function(req, res, next) {
    res.render('initiate')
  })

  app.post('/user/wager/initiate', app.isAuthenticated, function(req, res, next) {
    console.log(req.user)
    var newwager =new Wager({
      initiator_mdb_id: req.body.initiatorid || 'test_initiator_mdb_id',
     	acceptee_mdb_id: req.body.accepteeid || 'test_cceptee_mdb_id',
     	ammount_wagered: req.body.ammount_wagered || 'test_ammount_wagered',
     	currency_wagered: req.body.currency_wagered || 'test_currency_wagered',
     	transaction_id: req.body.transactionid || 'test_transaction_id',
     	fulfillment_confirmed: false
    })
    res.json({
        user: req.user,
        initiatesuccess: 'successful initiation!',
        wager: newwager
      }
    )

  })
  app.get('/user/acct/initiated', app.isAuthenticated, function(req, res, next) {
    if(req.body){
      console.log(req.body, 'hello')
    }else{
      throw new Error('no req.body')
    }
  })


}
