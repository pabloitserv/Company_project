angular.module('site')

.factory('userServiceToken', function($http) {
    var _postToken = function(parametros) {
        return $http.post('http://104.236.110.237:3000' + "/session", parametros).then(function(result){
          return(result);
        }, function(error){
          console.log(error);
        });
    };
    return {
        postToken: _postToken
    }
})

.factory('userServiceLogin', function($http) {
    var _getLogin = function(token) {
        return $http.get('http://104.236.110.237:3000' + "/session/user?token=" + token)
        .then(function(token){
          return token;
        }, function(error){
          console.log(error);
        });
    };
    return {
        getLogin: _getLogin
    }
});
