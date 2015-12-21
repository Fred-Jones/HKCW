var P = require('promise')
module.exports = function(model, id) {
  var p = new P(function(rs, rj) {
    model.findOne({_id: id}, function(err, md) {
      if(err){ rj(err)}else{
        rs(md.email)
      }
    })
  })
  return p
}
