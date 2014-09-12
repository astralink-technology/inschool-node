exports.dbConfig = function(){
    var dbConfig = new Object();
    //When development for eyeOrcas, use this
    dbConfig.appName = 'eyex';
    dbConfig.username = 'ubuntu';
    dbConfig.password = 'astralink';
    dbConfig.host = 'eyex.eyeorcas.com';
    dbConfig.port = '5432';
    dbConfig.db = 'eyex';

    return dbConfig;
}

exports.mailConfig = function(){

    var mailConfig = new Object();

    mailConfig.host = 'smtp.mandrillapp.com';
    mailConfig.username = 'shiweifong@gmail.com';
    mailConfig.password = '9nwaBLJV5FtYeOeyfF_yBQ';
    mailConfig.from = 'shiwei@chilli-panda.com';
    mailConfig.fromName = 'Chillipanda';
    mailConfig.addReplyTo = 'shiwei@chilli-panda.com';
    mailConfig.bcc = 'shiwei@chilli-panda.com';

    return mailConfig;
}

exports.legacyConfig = function(){

    var legacyConfig = new Object();

    //production mode
    legacyConfig.legacyHostUrl = 'http://legacy.chilli-panda.com';

    return legacyConfig;

}