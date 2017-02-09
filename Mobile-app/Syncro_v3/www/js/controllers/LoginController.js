'use strict';
angular.module('starter')
.controller('LoginController', function($scope, $ionicPopup, $state, $timeout, userServiceToken, userServiceLogin){

    $scope.params = {};

    $scope.validarLogin = function(params){

        // var popup = $ionicPopup.show({
        //     title: "Error",
        //     content: "Cpf e senha vazios!"
        //   });
        //   $timeout(function(){
        //     popup.close();
        //     //$state.go('dash');
        //   }, 3000);

      userServiceToken.postToken(params).success(function(chave){
        var token = chave.token;
        userServiceLogin.getLogin(token).success(function(user){

        if(user.value == null){
            var popup = $ionicPopup.show({
              title: 'Aviso<i class="icon ion-alert-circled"></i>',
              content: 'Usuário não existe'
            })
            $timeout(function(){
              popup.close();
              //$state.go('dash');
            }, 3000);
        }else{
          if (params.cpf == user.value.cpf) {
              $scope.user = user.value;
              console.log($scope.user);

                console.log("ok");
            }
          }

          // console.log("params");
          // console.log(params);
          // console.log("chave");
          // console.log(chave);
          // console.log("token");
          // console.log(token);
          // console.log("user");
          // console.log(user.value);


        }).error(function(user, status){});
      }).error(function(chave, status){});







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
  };

});
