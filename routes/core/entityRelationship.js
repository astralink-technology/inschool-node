var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getEntityRelationship = function(req, res){
    var entityRelationshipId = null;
    var entityId = null;
    var relatedId = null;
    var status = null;
    var type = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityRelationshipId) entityRelationshipId = req.query.EntityRelationshipId;
    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.RelatedId) relatedId = req.query.RelatedId;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity_relationship($1, $2, $3, $4, $5, $6, $7)'
        , [
            entityRelationshipId
            , entityId
            , relatedId
            , status
            , type
            , pageSize
            , skipSize
        ]);
};
exports.getEntityRelationshipDetails = function(req, res){
    var entityRelationshipId = null;
    var entityId = null;
    var relatedId = null;
    var status = null;
    var type = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityRelationshipId) entityRelationshipId = req.query.EntityRelationshipId;
    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.RelatedId) relatedId = req.query.RelatedId;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Status) status = req.query.Status;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity_relationship_details($1, $2, $3, $4, $5, $6, $7)'
        , [
            entityRelationshipId
            , entityId
            , relatedId
            , type
            , status
            , pageSize
            , skipSize
        ]);
};
exports.addEntityRelationship= function(req, res){
    if (
        req.body.EntityRelationshipId &&
            req.body.EntityId &&
            req.body.RelatedId
        ){

        var entityRelationshipId = null;
        var entityId = null;
        var relatedId = null;
        var status = null;
        var type = null;

        if (req.body.EntityRelationshipId) entityRelationshipId = req.body.EntityRelationshipId;
        if (req.body.EntityId) entityId = req.body.EntityId;
        if (req.body.RelatedId) relatedId = req.body.RelatedId;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;

        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_entity_relationship($1, $2, $3, $4, $5, $6)'
            , [
                entityRelationshipId
                , entityId
                , relatedId
                , status
                , createDate
                , type
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
exports.deleteEntityRelationship= function(req, res){
    if (
        req.body.EntityRelationshipId
        ){

        var entityRelationshipId = null;

        if (req.body.EntityRelationshipId) entityRelationshipId = req.body.EntityRelationshipId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_entity_relationship($1)'
            , [
                entityRelationshipId
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
exports.updateEntityRelationship = function(req, res){
    if (
        req.body.EntityRelationshipId
        ){

        var entityRelationshipId = null;
        var entityId = null;
        var relatedId = null;
        var status = null;
        var type = null;

        if (req.body.EntityRelationshipId) entityRelationshipId = req.body.EntityRelationshipId;
        if (req.body.EntityId) entityId = req.body.EntityId;
        if (req.body.RelatedId) relatedId = req.body.RelatedId;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_entity_relationship($1, $2, $3, $4, $5)'
            , [
                entityRelationshipId
                , entityId
                , relatedId
                , status
                , type
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