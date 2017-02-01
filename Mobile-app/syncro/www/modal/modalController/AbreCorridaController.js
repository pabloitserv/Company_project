angular.module('starter')
.controller('AbreCorridaController', function($scope, $ionicPopup, $timeout, $state){


  $scope.enviarDados = function(){
    var alertaPopup = $ionicPopup.show({
      title: 'Analisando Dados',
      template: '<div class="text-center"><ion-spinner icon="ripple" class="text-center spinner-positive"></ion-spinner></div>'
    })
    $timeout(function () {
      alertaPopup.close();
      $scope.closeOpenRunModal();
    }, 3000);

  };



});
