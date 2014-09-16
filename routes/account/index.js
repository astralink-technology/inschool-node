var authorizationHelper = require('../../helpers/authorization');
var userHelper = require('../../helpers/user');

exports.logout = function (req, res){
    req.session.destroy();
    res.redirect('/');
};