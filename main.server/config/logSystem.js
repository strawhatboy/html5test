/**
 * Created by cuichua on 4/25/2014.
 */
var winston = require('winston');
var fs = require('fs');
var viewHelpers = require('view-helpers');

module.exports = function (config) {
    winston.setLevels(winston.config.npm.levels);
    var loggers = config.loggers;
/*    {
        console: {
            level: 'debug',
            colorize: true,
            timestamp: true
        },
        file: {
            level: 'debug',
            timestamp: true,
            maxsize: 5304433,
            maxFiles: 20
        }
    };*/
    var logPath = config.logPath;
    if (!fs.existsSync(logPath)){
        fs.mkdirSync(logPath);
    };

    loggers.file.filename = logPath + '/log_' + 'bbb' + '.log';
    winston.loggers.add('defaultLogger', loggers);


    return winston.loggers.get('defaultLogger');
};