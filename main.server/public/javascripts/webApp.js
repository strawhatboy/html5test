/**
 * Created by cuichua on 4/25/2014.
 */
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.controllers',
    'myApp.controllers.welcome'
])
    .config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
    $routeProvider
        .when('/haha', {templateUrl: 'partials/test', controller: 'myngController'})
        .when('/', {templateUrl:'partials/welcome', controller: 'welcomeController'})
        .otherwise({redirectTo: '/'});
}]);