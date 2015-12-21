var P = require('promise')
module.exports = function(model, id) {
  var m = model //mogoose model
  var p = new P(function(rs, rj) {
    m.find({_id: id}, function(err, md) {
      if(!err){
        resolve(md)
      }else{
        rj(err)
      }
    })
  })
  return p
}
