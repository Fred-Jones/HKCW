// ppm on heroku
// // heroku addons:create ssl:endpoint
// can generate free pubkey from heroku
// var blizzsock = require('./blizzsock.js')
module.exports = function (app, config) {
  var __APPEXPORT = app
  var server = require('http').createServer(__APPEXPORT)
  var io = require('socket.io')(server)
  io.on('connection', function(sock, err){
    if(err) console.log(err)
    console.log('connection', sock)
    sock.on('message', function(dt) {
      console.log(dt)
      sock.emit('message', 'eyyy sup')
    })
  })

  server.listen(config)
}
