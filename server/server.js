var express = require('express');
var main = require('./middleware');
var path = require('path');

var app = express();

// app.get('/', function(req, res){
//   res.sendFile(path.resolve('client/index.html'));
// })

// app.get('/views/*', function(req, res){
//   res.sendFile(path.resolve('client/views'+))
// })

main(app, express);

app.listen(8000);

module.exports = app;