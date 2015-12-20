module.exports = function(app) {
	app.get('/user', app.isAuthenticated, function(req, res, next) {
		res.render('index', {
			user: req.user
		})
	})
}

