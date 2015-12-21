var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  piclink: String,
  creditcard: String, //encrypt credit card
  wagers: [String] //an array of Wager.meta json strings

});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

module.exports = mongoose.model('User', UserSchema);

//for wager in wagers if wager.meta
