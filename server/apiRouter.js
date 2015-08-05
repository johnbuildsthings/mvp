var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require('fs'));
var utils = Promise.promisifyAll(require('./utils'));

module.exports = function(app){
  app.get('/api/events', eventsRequest);
}

var eventsRequest = function(){
  var date = '2015-06-09';
  processData(date);
}

// var readJson = function(next){
//   fs.readFileAsync('data/ApiDump.json', 'utf8')
//   .then(function(err, data){
//     if(err) console.log('error');

//     var parsed = JSON.parse(data);
//     // console.log(parsed[0]);
//     return parsed;
//   }).then(next);
// }

var processData = function(date){
  var results = [];

  
  utils.readJsonAsync()
  .then(function(err, data){
    if(err) console.log('error in processData');
    data.forEach(function(event){
      if(event.event_start.split(' ')[0] === date){
        results.push(event);
      }
    });
  });
  console.log('processData: ', results);  
}

eventsRequest();