module.exports = function(app) {
	app.get('/user',  function(req, res, next) {
		res.render('user')
	})
}
