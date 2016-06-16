(function() {
  'use strict'

  angular
    .module('Services')
    .factory('authService', authService);
  
  authService.$inject = ['tokenService', '$log', '$http'];

  function authService(tokenService, $log, $http) {
    $log.info('Token Service loaded.');

    var service = {
      logIn: logIn,
      isLoggedIn: isLoggedIn,
      logOut: logOut,
      currentUser: currentUser,
      refreshToken: refreshToken
    };

    return service;

    function logIn(data) {
      var promise = $http({
        method: 'POST',
        url: '/api/token',
        data: data
      })
      .then(function(res) {
        tokenService.store(res.data.token);
        return tokenService.decode();
      })

      return promise;
    }

    function isLoggedIn() {

    }

    function logOut() {

    }

    function currentUser() {

    }

    function refreshToken() {

    }
  }
  
})();