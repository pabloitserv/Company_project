// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.run(function($ionicPlatform, $ionicPopup, $timeout) {
  $ionicPlatform.ready(function() {

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
    if(window.Connection){
      if(navigator.connection.type == Connection.NONE){
        var popup = $ionicPopup.show({
          title: 'Mensagem',
          template: '<p class="text-center assertive" style="font-size: 1.2em;"><strong>Sem internet<br/>O aplicativo vai fechar em 5s</strong></p>',
        });
        $timeout(function(){
          ionic.Platform.exitApp();
        }, 5000);

      }else{
        var popup = $ionicPopup.show({
          title: 'Mensagem',
          template: '<p class="text-center positive" style="font-size: 1.2em;"><strong>Internet OK</strong></p>'
        });
        $timeout(function(){
          popup.close();
        }, 3000);
    }
  }
  });
})
