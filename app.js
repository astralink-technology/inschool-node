
/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    core = require('./routes/core/'),
    account = require('./routes/account/'),
    eyeorcas = require('./routes/eyeorcas'),
    helperDemo = require('./routes/helper-demo'),
    expressLayouts = require('express-ejs-layouts'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 7000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts)
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'sh1w31p@ssw0rd'}));
app.use(express.favicon(__dirname + '/public/img/favicon.ico', { maxAge: 2592000000 }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
    // TODO
}

/**
 * Routes
 */

// serve web pages
app.get('/', routes.index);
app.get('/dashboard', routes.dashboard);
app.get('/account/logout', account.logout);
app.get('/calendar', routes.calendar);
app.get('/my-classes', routes.myClasses);
app.get('/my-school', routes.mySchool);
app.get('/profile', routes.profile);
app.get('/attendance-list', routes.attendanceList);

// JSON API
app.get ('/core/:base/:api', core);
app.post ('/core/:base/:api', core);
app.put ('/core/:base/:api', core);
app.delete ('/core/:base/:api', core);

app.get ('/eyeorcas/:base/:api', eyeorcas);
app.post ('/eyeorcas/:base/:api', eyeorcas);
app.put ('/eyeorcas/:base/:api', eyeorcas);
app.delete ('/eyeorcas/:base/:api', eyeorcas);


//Helper Demos
app.get ('/helper-demo/:base/:method', helperDemo);

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
