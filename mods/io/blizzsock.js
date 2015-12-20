//this.apikey = 'uqtddrzuw8zuczzagfwy9bvxbh78ghgn'
//this.secret = '2C4AXFPDqU2eKwZmWnZQEFjXXN3XkybN'
var r = require('request')
var bnet = require('battlenet-api')('uqtddrzuw8zuczzagfwy9bvxbh78ghgn')
var Promise = require('promise')
//this is the callback for sock.on('blizzindexquery') in socket_test.js
exports.blizzindexquery = function(data) {
  var sok = this;
  var queryPromise = new Promise(function(resolve, reject){
    r.get('http://google.com', function(err, resp) {
      if(err) {
        console.log(err);
        reject(err)
      }
      resolve(resp)
    })

  })
  queryPromise.then(function(dt) {
    sok.emit('blizzindexquery', 'hello from queryPromise<--blizzsock.js')
  })

}

exports.battlenetQuery = function (data) {
  console.log(data)
  var sok = this;
  var queryPromise = new Promise(function (resolve, reject) {
    bnet.wow.challenge.regionLeaderboard({origin: 'us'}, function(err, resp) {
      if(err) reject(err)
      resolve(resp)
    })
  })
  queryPromise.then(function(dt){
    //working
    sok.emit('battlenetquery', dt)
  })

}
exports.sc2profileprofile = function(dt) {
  var sok = this
  console.log(dt)
  var qP = new Promise(function(resolve, reject) {
    bnet.sc2.profile.profile({origin: 'us', id: 2137104, region: 1, name: 'skt'}, function(err, resp) {
      if(err) reject(err)
      resolve(resp)
    })
  })
  qP.then(function(dt) {
    sok.emit('sc2profileprofile', dt)
  })

}

// //IDEA
// exports.bnetVicarious = function (data, toPromise, ) {
//   // var cb = **kwargs[-1]
//   var sok = this;
//   var qProm = new Promise(function(resolve, reject) {
//     //call bnet.wow.query()
//   })
//   qrom.then(function(dt) {
//     if(dt){sock.emit('bnetVicarious', dt)}
//   )
//
// }
