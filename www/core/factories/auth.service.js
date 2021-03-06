(function() {
  'use strict'

  angular
    .module('Services')
    .factory('authService', authService);
  
  authService.$inject = ['tokenService', '$log', '$http', 'urlFactory', 'dataService'];

  function authService(tokenService, $log, $http, urlFactory, dataService) {
    $log.instantiate('Auth', 'service');

    var service = {
      queryVendor: queryVendor,
      logIn: logIn,
      isLoggedIn: isLoggedIn,
      logOut: logOut,
      currentUser: currentUser,
      refreshToken: refreshToken
    };

    return service;

    function queryVendor(data) {
      $log.info('Auth Service login vendor')
      var promise = $http({
        method: 'GET',
        url: urlFactory + '/vendor',
        params: data
      })
      .then(function(res) {
        $log.info("Auth Service login vendor success", res);
        return res
      })
      .catch(function(err) {
        // $log.info("yo wtf", err)
        throw err;
      })

      return promise;
    }

    function logIn(data) {
      $log.info('Auth Service login')
      return $http({
        method: 'POST',
        url: urlFactory + '/token',
        data: data
      })
      .then(function(res) {
        $log.info('Auth Service login success.', res)
        tokenService.store(res.data.token);
        return tokenService.decode();
      })
      .catch(function(err) {
        $log.info("err", err)
        return err
      })
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