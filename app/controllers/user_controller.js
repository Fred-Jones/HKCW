var gridMid = require('../../mods/gridfs/returngridurlforpic.js')

module.exports = function(app) {
	app.get('/user',  app.isAuthenticated, gridMid, function(req, res, next) {
		res.render('user', {
			user:{
				picurl: req.picurl,
				email: req.user.email || 'No email'
			}
		})
	})
}
