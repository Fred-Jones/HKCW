var gulp = require('./guplp/gulpmods.js')
var gulp = gulp || function(name) {
  this.test = function() {console.log(name)}
  this.description = name
}
gulp.test('.cleandir')
