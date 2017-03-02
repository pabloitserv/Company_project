// (function() {
//   'use strict';
angular.module('site', ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "templates/login.html",
        controller: 'LoginController'
    })

    $routeProvider.otherwise({redirectTo : '/login'});
});
// })();
