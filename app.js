
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require('./routes/main');
var loginHost = require('./routes/loginHost');
var loginSearch = require('./routes/loginSearch');

var host = require('./routes/host');
var solo = require('./routes/solo');
var search = require('./routes/search');
var inSession = require('./routes/inSession');
var edit = require('./routes/edit');
var back = require('./routes/index');

var queue= require('./routes/queue');
var chat= require('./routes/chat');


//v2.0:
var welcome = require('./routes/welcome');
var login = require('./routes/login');





// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', welcome.view);
app.get('/login', login.view);
app.get('/loginHost', loginHost.view);
app.get('/loginSearch', loginSearch.view);
app.get('/main', main.view);
app.get('/host', host.view);
app.get('/solo', solo.view);
app.get('/search', search.view);
app.get('/inSession', inSession.view);
app.get('/edit', edit.view);
app.get('/back', welcome.view)

app.get('/chat', chat.view);
app.get('/queue', queue.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
