var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  piclink: String,
  wagers: {},
  creditcard: String //encrypt credit card



});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

module.exports = mongoose.model('User', UserSchema);
