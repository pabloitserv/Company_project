angular.module('starter')
.controller('CorridaController', function($scope){

  $scope.abrirCorrida = function(){
    alert("Abrir");
  }
  $scope.fecharCorrida = function(){
    alert("Fechar")
  }
});
