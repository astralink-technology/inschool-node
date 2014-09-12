var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
var cryptHelper  = require('../../helpers/crypt');

exports.updateAuthentication = function(req, res){
    if (
        req.body.AuthenticationId
        ){

        var authenticationId = null;
        var authenticationString = null;
        var password = null;
        var lastLogin = null;
        var lastLogout = null;
        var lastChangePassword = null;
        var requestAuthenticationStart = null;
        var requestAuthenticationEnd = null;
        var authorizationLevel = null;
        var lastUpdate = null;

        if (req.body.AuthenticationId) authenticationId = req.body.AuthenticationId;
        if (req.body.AuthenticationString) authenticationString = req.body.AuthenticationString;
        if (req.body.Password) password = req.body.Password;
        if (req.body.LastLogin) lastLogin = req.body.LastLogin;
        if (req.body.LastLogout) lastLogout = req.body.LastLogout;
        if (req.body.LastChangePassword) lastChangePassword = req.body.LastChangePassword;
        if (req.body.RequestAuthenticationStart) requestAuthenticationStart = req.body.RequestAuthenticationStart;
        if (req.body.RequestAuthenticationEnd) requestAuthenticationEnd = req.body.RequestAuthenticationEnd;
        if (req.body.AuthorizationLevel) authorizationLevel = req.body.AuthorizationLevel;

        var lastUpdate = dateTimeHelper.utcNow();

        //encrypt the hash
        var hash = null;
        if (password){
            hash = cryptHelper.encrypt(req, res, password);
        }

        var authenticationStringLower = null;
        //get the authentication string lower
        if (authenticationString){
            authenticationStringLower = authenticationString.toLowerCase();
        }
        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_authentication($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
            , [
                authenticationId
                , authenticationString
                , authenticationStringLower
                , hash
                , null
                , lastLogin
                , lastLogout
                , lastChangePassword
                , requestAuthenticationStart
                , requestAuthenticationEnd
                , authorizationLevel
                , lastUpdate
            ]);
    }else{
        res.json({
            RowsReturned : null,
            Data : null,
            Error : true,
            ErrorDesc : "Internal Server Error - Parameters Required",
            ErrorCode: 500
        })
    }
};