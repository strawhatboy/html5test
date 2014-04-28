/**
 * Created by cuichua on 4/24/2014.
 */
var express = require('express');
var path = require('path');
var routes = require('../routes');

module.exports = function(app){

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(process.env.Root_Dir, 'views'));
    app.set('view engine', 'jade');
    app.disable('x-powered-by');

    app.configure('all', function(){
        app.use(express.static(path.join(process.env.Root_Dir, 'public')));
        app.use(express.favicon(path.join(process.env.Root_Dir, 'favicon.ico')));
        app.use(express.logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());

        app.use(app.router);
        app.get('/', routes.index);
        app.get('/partials/:name', function(req, res){
            console.log('!!!!!');
            console.log(JSON.stringify(req.params.name, null, 4));
            res.render('partials/' + req.params.name);
            //next();
        });

        app.get('*', routes.index);

// development only
        if ('development' == app.get('env')) {
            app.use(express.errorHandler());
        }
    });
    //var xx = express.favicon();
//console.log(xx);

}