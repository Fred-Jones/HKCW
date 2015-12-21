var unique = require('uniqueid')
module.exports = function(type) {
  var t = type;
  switch(t){
    case 'wager':
      return t = '_unique_wager' + unique()
  }
  return t
}
