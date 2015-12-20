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

    socket.on('joinroom', function(roomname) {
        // if(!rooms[roomname])
        // // create room
        // else
        // // join room
    })
    socket.on('closeroom', function(roomname) {
      //close room
    })

  })

  server.listen(config.port)
}
