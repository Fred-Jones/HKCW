var socket = io();
socket.on('toclientmessage', function(message) {
  $('.chatbox').append($('<p/>').text(message))

})
demonsp = io('/demo-namespace')

$('.chatbutton').click(function(e) {
    e.preventDefault()
    var to_send =  $('.chattext').val()
    socket.emit('toservermessage', to_send)
    demonsp.emit('toservermessage', to_send)
  })

  demonsp.on('toclientmessage', function(message) {
    $('.chatbox').append($('<p/>').text(message))

  })
