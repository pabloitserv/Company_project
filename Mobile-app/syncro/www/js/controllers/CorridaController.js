angular.module('starter')
.controller('CorridaController', function($scope, $ionicModal){

  $ionicModal.fromTemplateUrl('modal/modalTemplate/abreCorrida.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.abrirCorrida = function(){
    $scope.openModal();
  }
  $scope.fecharCorrida = function(){
    alert("Fechar")
  }
});
