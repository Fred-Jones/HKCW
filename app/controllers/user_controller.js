var gridMid = require('../../mods/gridfs/returngridurlforpic.js')
var User = require('../models/mongoosemodels/user.js')

module.exports = function(app) {
	app.get('/user',  app.isAuthenticated, gridMid, function(req, res, next) {
		User.findOne({email: req.user.email}, function(err, user) {
			if(err) throw new Error('NO user by that email')

			if(user){
				var user = {
					picurl: req.picurl,
					email: req.user.email,
					wagers: {
						acceptable: [],
						initated: []
					}
				}
				var acceptable = []
				var initiated = []
				var wagers = req.user.wagers
				var user_id = user._id
				var email = req.user.email
				if(user.wagers.length >= 1){
					for (var w in wagers){
						//append users wagers to user object
						if(w.meta.initiator_mdb_id == user_id){
							user['wagers']['initiated'].push(w._id) //send up the id of the wager

						}else if(w.meta.acceptor_mdb_id == user_id){
							user['wagers']['acceptable'].push(w._id) //send up the id of wager

						}else{
							throw new Error('This user has wagers without his participation')
						}
					}

				}else{

				}
				console.log('sending user', user)
				res.render('user', {user: user})
			}
		})
	})
}

// div #{user.wagers.acceptable}
// div #{user.wagers.initiated}
// div #{user.rwagers.esolved}

// res.render('user', {
// 	user:{
// 		picurl: req.picurl,
// 		email: req.user.email || 'No email',
// 		wagers: {
// 				acceptable: req.user.wagers,
// 				initiated: req.user.initiated,
// 		}
// 	}
// })
