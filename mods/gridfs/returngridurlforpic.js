var gridfs = require('gridfs-stream')
var mongo = require('mongodb');
var config = require('../../config/config.js')
// var Busboy = require('busboy')
var db = new mongo.Db('grid-fs-cw', new mongo.Server("127.0.0.1", 27017));
module.exports = function(req, res, next) {
  //check type of pic .jpeg .
  //PIL process to fix it up for thumbnails etc
  //gridfs save on grid
  //save url in mongo://db.users
  //
  //BUSBOY
  //if (req.method === 'POST') {
    // var busboy = new Busboy({ headers: req.headers });
    // busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    //   var saveTo = path.join(os.tmpDir(), path.basename(fieldname));
    //   file.pipe(fs.createWriteStream(saveTo));
    // });
    // busboy.on('finish', function() {
    //   res.writeHead(200, { 'Connection': 'close' });
    //   res.end("That's all folks!");
    // });
    // // return req.pipe(busboy);
  console.log()
  url = 'https://s-media-cache-ak0.pinimg.com/236x/4e/65/48/4e6548116707fc6acf1057c8ae550756.jpg'
  console.log(url,'\n', 'gridfs url = ^^')
  req.picurl = url
  next()


}
