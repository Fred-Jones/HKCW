var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload');
var fs = require('fs'),
    pth = require('path')
    ps = require('process')
var P = require('promise')
var g = require('./gulp/gulpmods.js')
 // g(modname, modnum, arg_array)
var cfg = require('./config/config.js')// WIP



gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee jade',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('clean', function() {
  console.log('*slrp*')

  var clean_Promise = new P(function(rs, rj){
    fs.readdir('./', function(err, dir) {
        rs(dir)
      }
    );
  })
  clean_Promise.then(function(homedir) {
    console.log(homedir)
  })

})

gulp.task('makedir', function() {


})

gulp.task('iotest', function() {

})
gulp.task('echo', function() {
  console.log('hello')
})

if ((ps.env.NODE_ENV == 'production' || 'pro') && (cfg.clean)) {
  gulp.task('clean')
}else{
  gulp.task('default', [
    'develop'
  ]);

}
gulp.task('echo').run()
