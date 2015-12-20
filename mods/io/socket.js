//g2g demo chats
var fs = require('fs')
var path = require('path')
var grantmessages_PATH = path.normalize('../../mods/io/output/grantmessages.txt')
module.exports = function (app, config) {
  var __APPEXPORT = app
  var server = require('http').createServer(__APPEXPORT)
  server.listen(config)
  var io = require('socket.io')(server)
  io.on('connection', function(sock, err){
    if(err) console.log(err)
      sock.emit('toclientmessage', 'Welcome to the chat!')

    // sock.on('grantmessages', function(dt) {
    //   console.log(dt)
    //   sock.emit('demofromgrant', fs.readFileSync(grantmessages_PATH))
    // })
    sock.on('toservermessage', function(dt) {
      console.log(dt)
      io.emit('toclientmessage', dt)
    })

  })
  io.on('toservermessage', function(socket) {
    socket.emit('toclientmessage', 'to clientient')
  })
  var demonsp = io.of('/demo-namespace')
  demonsp.on('conection', function(sock){
    if(err) console.log(err)
      sock.emit('message', 'Welcome to the chat!')
      console.log('demo conection')
    // sock.on('grantmessages', function(dt) {
    //   console.log(dt)
    //   sock.emit('demofromgrant', fs.readFileSync(grantmessages_PATH))
    // })

  })
  demonsp.on('message', function(socket) {
    // console.log(dt)
    socket.emit('message', dt)
  })

  app.get('/user/chat/newroom', function(req, res, next) {
    //send name of room with each message but just hidden
    // io.of(req.body/newroomunique)
  })

}
