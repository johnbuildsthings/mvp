var http = require('http');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

exports.readJson = function(){
  var fileName = __dirname + '/data/ApiDump.json';
  console.log(fileName);
  fs.readFileAsync(fileName, 'utf8')
  .then( function(data){
    // if(err) console.log('error in readJson', err.message);
    // else{
      var parsed = JSON.parse(data);
      console.log('read Json: ', parsed[0]);
      return parsed;
    // }
  });
}

exports.readJson();