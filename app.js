
/**
 * Module dependencies.
 */

var express = require('express');
// var wines = require('./routes/wines');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = module.exports = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.bodyParser());
app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.send(500, 'Something broke!');
// });

// function logErrors(err, req, res, next) {
//   console.error(err.stack);
//   next(err);
// }

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.logger('dev'));
}

require('./routes');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
