
/**
 * Module dependencies.
 */

var express = require('express');
// var fs = require('fs');
// var https = require('https');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var session = require('express-session');

var index = require('./routes/index');

var back = require('./routes/welcome');

var queue= require('./routes/queue');


//v2.0:
var welcome = require('./routes/welcome');
var login = require('./routes/login');
var home = require('./routes/home');
var host = require('./routes/host');
// var listeners = require('./routes/listeners');

// A & B Testing
var hostSong_pageA = require('./routes/hostSongPageA');
var hostSong_pageB = require('./routes/hostSongPageB');


var hostSong = require('./routes/hostSong');
var hosting = require('./routes/hosting');

var stream = require('./routes/stream');
var streaming = require('./routes/streaming');

// Add function:
var add = require('./routes/add')


//Obsolete:
// var main = require('./routes/main');
// var loginHost = require('./routes/loginHost');
// var loginSearch = require('./routes/loginSearch');
// var solo = require('./routes/solo');
// var search = require('./routes/search');
// var inSession = require('./routes/inSession');
// var edit = require('./routes/edit');
// var chat= require('./routes/chat');


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
app.get('/back',welcome.view);
app.get('/login', login.view);
app.get('/home', home.view);
app.get('/stream', stream.view);
app.get('/streaming', streaming.view);

app.get('/host', host.view);
app.get('/hostSong', hostSong.view);
app.get('/hostSong/Page_A', hostSong_pageA.view);
app.get('/hostSong/Page_B', hostSong_pageB.view);
app.get('/hosting', hosting.view);
app.get('/queue', queue.view);
// app.get('/listeners', listeners.view);


//To add function:
app.get('/add', add.addFunction);




// Obsolete:
// app.get('/loginHost', loginHost.view);
// app.get('/loginSearch', loginSearch.view);
// app.get('/edit', edit.view);
// app.get('/main', main.view);
// app.get('/search', search.view);
// app.get('/chat', chat.view);
// app.get('/solo', solo.view);
//app.get('/inSession', inSession.view);



// Example route
// app.get('/users', user.list);

// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
