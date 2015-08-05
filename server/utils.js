var http = require('http');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

exports.readJson = function(){
  var fileName = __dirname + '/data/ApiDump.json';

  return fs.readFileAsync(fileName, 'utf8')
}


// exports.processData = function(date){
//   var results = [];

//   return readJson()
//   .then(function(data){
//     // console.log('hello')
//     JSON.parse(data).forEach(function(event){
//       if(event.event_start.split(' ')[0] === date){
//         results.push(event);
//         // console.log(event.name);
//       }
//     });
//   });
//   /*.then(return results)*/;
//   // console.log(results);
// }
// exports.readJson();