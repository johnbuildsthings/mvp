var express = require('express');
var main = require('./middleware');
var path = require('path');

var app = express();

main(app, express);

app.listen(8000);

module.exports = app;