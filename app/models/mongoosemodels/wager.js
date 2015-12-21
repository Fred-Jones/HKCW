
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

 var WagerSchema = new Schema({
   meta:{
     unique_id: String,
     initiator_mdb_id: String,
     acceptor_mdb_id: String,
     ammount_wagered: String,
     currency: String,
     auth: String,
     description: String,
     resolvedate: Boolean,
     accepted: Boolean,
     resolved: Boolean
   },
   params: {} //loop through params and have user check to accept params in acceptable.jade and accept.jade
              //append to params in
 })
 module.exports = mongoose.model('Wager', WagerSchema)

//option to resolve wager if initiator_mdb_id == req.user._id
//option to accept wager if acceptor_mdb_id == req.user._id
