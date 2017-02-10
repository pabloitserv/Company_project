'use strict';
angular.module('starter')
.controller('LoginController', function($scope, $ionicPopup, $window, $state, $timeout, Scopes, userServiceToken, userServiceLogin){

  $scope.validarLogin = function(){
     var parametros = {
          cpf: $scope.cpf,
          password: $scope.password
        };



          Scopes.store('loginCtrl',$scope);

          userServiceToken.postToken(parametros).success(function(chave){
            var token = chave.token;
              userServiceLogin.getLogin(token).success(function(user){
                  console.log(parametros);
                $scope.user = user.value;
                $scope.nome = user.value.name;
                $scope.token = token;
                $scope.usuario = user.value.usuario;

                    if (parametros.cpf == user.value.cpf && parametros.password == null) {
                          if (user.value.password == null) {
                            alert("MSG001 - ESTE USUÁRIO NÃO TEM SENHA DEFINIDA!\n\nPRESSIONE OK PARA CONTINUAR");
                            $location.path('/page5');
                          }
                    }
                    else if (parametros.cpf == user.value.cpf && parametros.password == user.value.password) {
                       $state.go('dash');
                    }

              }).error(function(user, status){});
          }).error(function(chave, status){});
};

});

// Salvando o cpf na memoria
    // (function loadStorage(){
    //   $scope.params.cpf = localStorage.getItem("firstItem");
    // })();
    // function clearStorage(){
    //     if (localStorage.key("firstItem")) {
    //       localStorage.clear();
    //     }
    // }
    // function storageSave(){
    //   localStorage.setItem("firstItem", parseInt($scope.params.cpf));
    // }
    // clearStorage();
    // storageSave();
////////////////////////////////////////////////////////////////////////////////
// Validando o login

      // userServiceToken.postToken($scope.params).success(function(chave){
      //   var token = chave.token;
      //   userServiceLogin.getLogin(token).success(function(user){
      //     $scope.user.push({
      //       cpf: user.value.cpf,
      //       password: user.value.password,
      //       nome: user.value.name
      //     })
      //       console.log($scope.user);
      //
      //
      //   }).error(function(user, status){});
      // }).error(function(chave, status){});





      // if(user.value == null){
      //     var popup = $ionicPopup.show({
      //       title: '<p class="text-center"><strong>Aviso <i class="icon ion-alert-circled assertive"></i></strong></p>',
      //       content: '<p class="text-center"><strong>Usuário inválido</strong></p>'
      //     })
      //     $timeout(function(){
      //       popup.close();
      //       //$state.go('dash');
      //     }, 3000);
      // }
      // if(!params.password){
      //   console.log("falta algo");
      // }
      //
      // console.log(params);
      // console.log("params");
      // console.log(params.password);
      // console.log("chave");
      // console.log(chave);
      // console.log("token");
      // console.log(token);
      // console.log("user");
      // console.log(user.value.password);


            //
            // userServiceLogin.getLogin(token).success(function(user){
            //
            //   $scope.user = user.value;
            //   $scope.nome = user.value.name;
            //   $scope.token = token;
            //   $scope.usuario = user.value.usuario;
            //
            //       if (parametros.cpf == user.value.cpf && parametros.password == null) {
            //             if (user.value.password == null) {
            //               alert("MSG001 - ESTE USUÁRIO NÃO TEM SENHA DEFINIDA!\n\nPRESSIONE OK PARA CONTINUAR");
            //               $location.path('/page5');
            //             }
            //       }
            //       else if (parametros.cpf == user.value.cpf && parametros.password == user.value.password) {
            //          $location.path('/page2');
            //       }
            //
            // }).error(function(user, status){});
    //   var popup = $ionicPopup.show({
    //     title: $scope.msg,
    //     content: $scope.params.cpf
    //   })
    //   $timeout(function(){
    //     popup.close();
    //     //$state.go('dash');
    //   }, 3000);
