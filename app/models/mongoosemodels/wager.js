
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

 var WagerSchema = new Schema({
 	initiator_mdb_id: String,
 	acceptor_mdb_id: String,
 	ammount_wagered: String,
 	currency_wagered: String,
 	transaction_id: String,
  fulfillmentdate: String,
 	fulfillment_confirmed: false
 })
 module.exports = mongoose.model('Wager', WagerSchema)
