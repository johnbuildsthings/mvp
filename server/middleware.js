var bodyParser = require('body-parser');


module.exports = function(app, express){

  var mainRoute = express.Router();
  var apiRoute = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));

  app.use(express.static(__dirname + '/../client/'));

  app.use('/', mainRoute);
  app.use('/api/events', apiRoute);


  require('./mainRouter.js')(mainRoute);
  require('./apiRouter.js')(apiRoute);
}