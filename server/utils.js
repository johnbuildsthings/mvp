var http = require('http');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

exports.readJson = function(){

  fs.readFileAsync(__dirname+'/data/ApiDump.json', 'utf8')
  .then( function(err, data){
    if(err) console.log('error in readJson');
    else{
      var parsed = JSON.parse(data);
      console.log('read Json: ', parsed[0]);
      return parsed;
    }
  });
}

exports.readJson();