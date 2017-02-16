angular.module('starter')

.factory('userServiceToken', function($http) {

  var _postToken = function(parametros){
      return $http.post(SERVICE_URL+"/session",parametros);
  };

  return{
      postToken: _postToken
  }
})

.factory('userServiceLogin', function($http) {
  var _getLogin = function(token){
      return $http.get(SERVICE_URL+"/session/user?token="+token);
  };

  return{
    getLogin: _getLogin
  }
})

.factory('userServicePass', function($http) {
 return {
    putPassword: function(_id,_password){

      var params = {
        id:_id,
        password:_password
      };
      var _url=  SERVICE_URL+"/user";
      return $http.put(_url,params).then(function(response){
              console.log("executou");
            return response;
            }, function(error){
              console.log("erro!");
            });
     }
  }
})

.factory('verificaCorridaService', function($http) {
 return {
    getCorrida: function(_token){

       var _url=  SERVICE_URL+"/run?token="+_token;
       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    });
  }
 }
})

.factory('criarCorridaService', function($http) {
      var _postCorrida = function(run){
          return  $http.post('http://104.236.110.237:3000/run', run);
      };
      return{
        postCorrida: _postCorrida
      }
})

.factory('Scopes', function ($rootScope) {
    var mem = {};

    return {
      store: function (key, value) {
        mem[key] = value;
      },
      get: function (key) {
         return mem[key];
       }
    };
})

.factory('buscarCorrida', function($http) {
 return {
    getCorridas: function(inicio, termino, idCar, idUser,flag){

      if (flag==1) {
        var _url= 'http://104.236.110.237:3000/run?$gte="'+inicio+'"&$lte="'+termino+'"&carro='+idCar+'"&flag='+flag+'';

      }else {
        var _url= 'http://104.236.110.237:3000/run?$gte="'+inicio+'"&$lte="'+termino+'&flag='+flag+'&usuario='+idUser+'';
      }


       return $http.get(_url).then(function(response){
          return response;
       }, function(error){

    })
  }
 }
})
.service('BlankService', [function(){

}]);
