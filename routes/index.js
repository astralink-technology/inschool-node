var authorizationHelper = require('../helpers/authorization');
var userHelper = require('../helpers/user');

exports.index = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('index', {
        title: 'InSchool Today'
        , viewClass: 'landing'
        , ngController: 'landingController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.dashboard = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('dashboard', {
        title: 'Dashboard'
        , viewClass: 'dashboard'
        , ngController: 'dashboardController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.profile = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('profile', {
        title: 'Profile'
        , viewClass: 'profile'
        , ngController: 'profileController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.calendar = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('calendar', {
        title: 'Calendar'
        , viewClass: 'calendar'
        , ngController: 'calendarController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.myClasses = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('myClasses', {
        title: 'My Classes'
        , viewClass: 'my-classes'
        , ngController: 'myClassesController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.mySchool = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('mySchool', {
        title: 'My School'
        , viewClass: 'my-school'
        , ngController: 'mySchoolController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};

exports.attendanceList = function(req, res){
    authorizationHelper.alreadyAuthorized(req, res, '/dashboard');

    var authLevel = '';
    var entityName = '';
    var entityId = '';
    var targetEntityId = '';
    var targetEntityName = '';
    var targetAuthLevel = '';

    if (req.session.authorizationLevel) authLevel = req.session.authorizationLevel;
    if (req.session.name) entityName = req.session.name;
    if (req.session.entityId) entityId = req.session.entityId;
    if (req.session.targetEntityId) targetEntityId = req.session.targetEntityId;

    res.render('attendanceList', {
        title: 'Attendance List'
        , viewClass: 'attendance-list'
        , ngController: 'attendanceListController'
        , entityName : entityName
        , entityId : entityId
        , targetEntityId : targetEntityId
        , targetEntityName : targetEntityName
        , targetAuthLevel : targetAuthLevel
        , authorizationLevel : authLevel});
};