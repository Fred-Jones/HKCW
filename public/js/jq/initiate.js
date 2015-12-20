$('document').ready(docReadyForInit)
function docReadyForInit() {
  initiateWager()
}
function initiateWager() {
  var count = 0;
  $('.btn.initwgr').click(function(e) {
    console.log('init wager client')
    console.log()
    $.ajax({
      method: 'POST',
      data: {
        acceptorid: ($('.acceptorid').value)
      },
      success: function(dt) {
                              console.log('success')
                              if($('.modal')){
                                $('.modal').remove()
                              }
                              var $modal = $('<div/>')
                              $modal.attr({
                                            class:'modal',
                                            style: 'position: absolute; width: 100vw; height: 60vh; ',

                                          }).text(count + '\n' + '\n' + dt)
                              count += 1
                              $('body').append($modal)
                              $modal.fadeOut(0)
                              $modal.fadeIn(1000)
                              console.log(dt)
                            }
    })

  })

}
