/**
 * Created by cuichua on 4/25/2014.
 */
angular.module('myApp.controllers', [])
.controller('myngController', ['$scope', function ($scope){
        $scope.wtf = 'MISSION COMPLETE';
    }])
.controller('welcomeController', ['$scope', function($scope){
        $scope.testValue = 'testestestestestest';
    }]);