/**
 * Created by cuichua on 4/28/2014.
 */
angular.module('myApp.services', [])
    .factory('rest', ['$http', '$log', function ($http, $log) {
        return {
            get: function (options, callback) {
                $http.get(options)
                    .then(function(result){
                        return result;
                    }, function(result){
                        $log.error('Failed to send get request ' + options);
                    });
            }
        };
    }])
    .factory('global', ['rest', function(rest){
        var globalObj = {};
        if (!globalObj.productName){
            rest.get('/getConfig/getProductName').then(function(){

            });
        }
    }])

    .
    factory('Page', ['$scope', function ($scope) {
    }]);