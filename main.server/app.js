
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var config = require('./config/config');

var app = express();
process.env.Root_Dir = process.env.Root_Dir || __dirname;
//console.log(process.env.Root_Dir)

console.log(JSON.stringify(process.env, null, 4));

require('./config/express')(app);
var port = app.get('port');
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
    config.logger.verbose('fjdslfsdjf');
});
