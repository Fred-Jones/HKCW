
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

 var WagerSchema = new Schema({
 	initiator_mdb_id: String,
 	acceptee_mdb_id: String,
 	ammount_wafered: String,
 	currency_wagered: String,
 	transaction_id: String,
 	fulfillment_confirmed: false
 })
 module.exports = mongoose.model('Wager', WagerSchema)