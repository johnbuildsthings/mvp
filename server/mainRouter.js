var mainController = require('./mainController');
var path = require('path');


module.exports = function(app){
  app.get('/', function(req, res){
  res.sendFile(path.resolve('client/index.html'));
  });

  // app.get('/views/*', function(req, res){
  //   res.sendFile(path.resolve('client/views'))
  // });
}