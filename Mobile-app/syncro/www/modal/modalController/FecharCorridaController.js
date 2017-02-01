angular.module('starter')
.controller('FecharCorridaController', function($scope, $ionicPopup, $timeout, $cordovaCamera){


  $scope.takeEndPhoto = function(){
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



    $scope.enviarDadosFecharCorrida = function(){
      var closeAlertPopup = $ionicPopup.show({
        title: 'Analisando dados',
        template: '<div class="text-center"><ion-spinner icon="lines" class="text-center spinner-positive"></ion-spinner></div>'
      });
      $timeout(function(){
        closeAlertPopup.close();
        var closeSuccessPopup = $ionicPopup.show({
          template: '<p class="text-center">Enviado com sucesso</p>'
        });
        $timeout(function(){
          closeSuccessPopup.close();
          $scope.closeCloseRunModal();
          console.log('Fechou miséra');
        }, 2000);
      }, 2500);
    };
});
