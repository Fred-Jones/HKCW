
module.exports = function(modname, modnumber, arg_array){
  var args = arg_array
  var modnumbermap = {

  }
   var mods = {
   		echo: function() {
   			process.stdout.write('echo')
   		},
   		cat_all_READYOU: function(arg_array){
   			console.log('TODO cat READYOU')
   		}
	}
   // populaate mods with options from ./mods
   // loop over mods and select the one to exectute with arg_array
  return mods[modname](arg_array)
}
