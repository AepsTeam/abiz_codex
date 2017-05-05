var express = require('express');
// var RedisStore = require('connect-redis')(express);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routesConfig = require('./routes/config')

var app = express();

// app.use(express.session({
//   secret: 'codex',
//   store: new RedisStroe({
//     host: '127.0.0.1',
//     port: '6379',
//     db: 'sessiondb'
//   })
// }));

// view engine setup
if (process.env.NODE_ENV === 'production') {
  app.set('views', path.join(__dirname, 'dist'));

} else {
  app.set('views', path.join(__dirname, 'views'));
}

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
routesConfig(app)
module.exports = app;