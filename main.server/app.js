
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var logger = require('./config/logSystem');

var app = express();
process.env.Root_Dir = process.env.Root_Dir || __dirname;
//console.log(process.env.Root_Dir)

console.log(JSON.stringify(process.env, null, 4));

require('./config/express')(app);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
    logger.verbose('fjdslfsdjf');
});
