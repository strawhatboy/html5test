/**
 * Created by cuichua on 4/28/2014.
 */
var path = require('path');

var config = require('./config.json');
var expressConfig = require('./express');
var logSystem = require('./logSystem')(config);

config.expressConfig = expressConfig;
config.logger = logSystem;

exports = module.exports = config;