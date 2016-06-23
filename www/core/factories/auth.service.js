(function() {
  'use strict'

  angular
    .module('Services')
    .factory('authService', authService);
  
  authService.$inject = ['tokenService', '$log', '$http', 'urlFactory', 'dataService'];

  function authService(tokenService, $log, $http, urlFactory, dataService) {
    $log.instantiate('Auth', 'service');

    var service = {
      logIn: logIn,
      isLoggedIn: isLoggedIn,
      logOut: logOut,
      currentUser: currentUser,
      refreshToken: refreshToken
    };

    return service;

    function logIn(data) {
      $log.info('Auth Service login')
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/token',
        data: data
      })
      .then(function(res) {
        $log.info('Auth Service login success.')
        tokenService.store(res.data.token);
        return tokenService.decode();
      })

      return promise;
    }

    function isLoggedIn() {
      return (tokenService.retrieve() != null);
    }

    function logOut() {
      tokenService.destroy();
      $log.debug("Goodbye.")
    }

    function currentUser() {
      var tokenData = tokenService.decode();

      if (tokenData) {
        tokenData.expiresAt = Date(tokenData.exp);

        delete tokenData.exp;
        delete tokenData.iat;
      }
      return tokenData;
    }

    function refreshToken() {
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/token/refresh'
      })
      .then(function(res) {
        tokenService.store(res.data.token);
        return token.decode();
      });

      return promise;
    }
  }
  
})();