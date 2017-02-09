angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:   'LoginController'
  })
  .state('dash', {
    url: '/dash',
    templateUrl: 'templates/dashboard.html'
  })


});
