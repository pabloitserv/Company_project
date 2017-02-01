angular.module('starter')
.controller('AbreCorridaController', function($scope, $ionicPopup, $timeout, $state, $cordovaCamera){

  $scope.takeStartPhoto = function(){
    var opt = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.Camera,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    $cordovaCamera.getPicture(opt).then(function(imageData){
      $scope.srcImage = "data:image/jpeg;base64," + imageData;
    }, function(err){
      console.log(err);
    });
  };


  $scope.enviarDadosAbrirCorrida = function(){
    var openAlertaPopup = $ionicPopup.show({
      title: 'Analisando Dados',
      template: '<div class="text-center"><ion-spinner icon="ripple" class="text-center spinner-positive"></ion-spinner></div>'
    });
    $timeout(function () {
      openAlertaPopup.close();
      var openSuccessPopup = $ionicPopup.show({
        title: 'Dados',
        template: '<p class="text-center">Enviados com sucesso</p>'
      });
      $timeout(function(){
        openSuccessPopup.close();
        $scope.closeOpenRunModal();
        console.log("Enviou mesmo");
      }, 2000);
    }, 2500);
  };



});
