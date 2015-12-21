$('document').ready(docReadyForInit)
function docReadyForInit() {
  initiateWager()
}
function initiateWager() {
  var count = 0;
  $('.btn.initwgr').click(function(e) {
    console.log('init wager client')
    console.log($('.friendsEmail').val())
    $.ajax({
      method: 'POST',
      data: {
        friendsEmail: $('.friendsEmail').val(),
        ammount: $('.ammount').text
      },
      success: function(dt) {
                              console.log('success')
                              console.log(dt)
                              if($('.modal')){
                                $('.modal').remove()
                              }
                              var $modal = $('<div/>')
                              $modal.attr({
                                            class:'modal',
                                            style: 'position: relative; width: 100vw; height: 60vh; ',

                                          }).text(dt.initiatesuccess + '\n' + count)
                              count += 1
                              $('body').append($modal)
                              $modal.fadeOut(0)
                              $modal.fadeIn(1000)

                            }
    })

  })

}
