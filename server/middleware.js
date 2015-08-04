var bodyParser = require('body-parser');


module.exports = function(app, express){

  var mainRoute = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));

  app.use(express.static(__dirname + '/../client/'));

  app.use('/', mainRoute);

  require('./mainRouter.js')(mainRoute);
}