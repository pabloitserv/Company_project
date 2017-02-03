angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  
  .state('menu.tabs', {
    url: '/page6',
    views:{
      'menuContent':{
        templateUrl: 'templates/tabs.html'
      }
    }
  })
  .state('menu.contratos', {
    url: '/page5',
    views:{
      'menuContent': {
        templateUrl:'templates/contratos.html'
      }
    }
  })
  .state('menu.estoque', {
    url: '/page4',
    views: {
      'menuContent':{
        templateUrl: 'templates/estoque.html'
      }
    }
  })

  .state('menu.notification', {
    url: '/page3',
    views: {
      'menuContent':{
        templateUrl: 'templates/notification.html'
      }
    }
  })
  .state('menu.km', {
    url: '/page2',
    views:{
      'menuContent':{
        templateUrl: 'templates/km.html'
      }
    }
  })
  .state('menu.rotas', {
    url: '/page1',
    views:{
      'menuContent':{
        templateUrl: 'templates/rotas.html'
      }
    }
  })
  .state('menu', {
    url: '/menuContent',
    templateUrl: 'templates/menu.html'
  })

  $urlRouterProvider.otherwise('/menuContent/page2');

});
