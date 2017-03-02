angular.module('site')
.controller('LoginController', function($scope, userServiceLogin, userServiceToken){

$scope.validarUsuario = function(){
var parametros = {
    cpf: $scope.usuario,
    password: $scope.senha
  };


userServiceToken.postToken(parametros).then(function(chave){
var token = chave.token;
  userServiceLogin.getLogin(token).then(function(user){

    $scope.user = user.value;
    $scope.nome = user.value.name;
    $scope.token = token;
    $scope.usuario = user.value.usuario;

        if (parametros.cpf == user.value.cpf && parametros.password == null) {
              if (user.value.password == null) {
                alert("MSG001 - ESTE USUÁRIO NÃO TEM SENHA DEFINIDA!\n\nPRESSIONE OK PARA CONTINUAR");
                //$location.path('/page5');
              }
        }
        else if (parametros.cpf == user.value.cpf && parametros.password == user.value.password) {
           //console.log($scope.user);
        }

  }, function(user, status, error){
    return user + "-" +status+ "-" + error;
  })
}, function(chave, status){
  return user + "-" +status+ "-" + error;
});

  };
});
