angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise('corrida');

  $stateProvider
  .state('corrida', {
    url: '/corrida',
    templateUrl: 'templates/corrida.html',
    controller: 'CorridaController'
  })
  .state('abrirCorrida',{
    url: '/abrirCorrida',
    templateUrl: 'modal/modalTemplate/abreCorrida.html'
  })
  .state('fecharCorrida', {
    url: '/fecharCorrida',
    templateUrl: 'modal/modalTemplate/fecharCorrida.html'
  })

});
