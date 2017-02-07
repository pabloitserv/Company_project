// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $ionicPopup, $timeout, $ionicLoading) {
  $ionicPlatform.ready(function() {
    verificaNet();
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    function verificaNet(){
      if(window.Connection){
        if(navigator.connection.type == Connection.NONE){
          var openAlertPopup = $ionicPopup.show({
            title: 'Mensagem',
            template: '<p class="text-center assertive" style="font-size: 1.1em;"><strong>Sem internet</strong></i></p>'+
                      '<br />'+
                      '<p class="text-center assertive" style="font-size: 0.9em;"><strong>Verifique a conexão de dados</strong></i></p>'
          });
          $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });

        }else{
          var openAlertPopup = $ionicPopup.show({
            title: 'Mensagem',
            template: '<p class="text-center assertive" style="font-size: 1.1em;"><strong>Tem internet</strong></i></p>'+
                      '<br />'+
                      '<p class="text-center assertive" style="font-size: 0.9em;"><strong>Pode usar</strong></i></p>'
          });
          $timeout(function(){
            openAlertPopup.close();
          }, 3000);
        }
      }
    };
  });
})
