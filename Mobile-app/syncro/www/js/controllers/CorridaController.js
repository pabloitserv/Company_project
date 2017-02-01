angular.module('starter')
.controller('CorridaController', function($scope, $ionicModal){

  $ionicModal.fromTemplateUrl('modal/modalTemplate/abreCorrida.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.openModal = modal;
  });
  $scope.openRunModal = function() {
    $scope.openModal.show();
  };
  $scope.closeOpenRunModal = function() {
    $scope.openModal.hide();
  };


  $ionicModal.fromTemplateUrl('modal/modalTemplate/fecharCorrida.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.closeModal = modal;
  });
  $scope.closeRunModal = function(){
    $scope.closeModal.show();
  }
  $scope.closeCloseRunModal = function(){
    $scope.closeModal.hide();
  }



  $scope.abrirCorrida = function(){
    $scope.openRunModal();
  }
  $scope.fecharCorrida = function(){
    $scope.closeRunModal();
  }
});