var chat_socket = null
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
    sock.on('blizzindexquery', blizzsock.blizzindexquery)
    sock.on('battlenetquery', blizzsock.battlenetQuery)
    sock.on('sc2profileprofile', blizzsock.sc2profileprofile)
  })

  server.listen(config.port)
}
