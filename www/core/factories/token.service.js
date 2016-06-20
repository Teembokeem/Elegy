(function() {
  'use strict';

  angular
    .module('Services')
    .factory('tokenService', tokenService);
  
  tokenService.$inject = ['$window', '$log'];

  function tokenService($window, $log) {
    $log.info('Token Service loaded.');

    var TOKEN_KEY = 'elegy_token';

    var service = {
      store: store,
      retrieve: retrieve,
      decode: decode,
      destroy: destroy
    };
    return service;

    function store(token) {
      console.log("hello working", token)
      $window.localStorage.setItem(TOKEN_KEY, token);
      return token;
    }

    function retrieve() {
      return $window.localStorage.getItem(TOKEN_KEY);
    }

    function decode() {
      var token = retrieve();
      if (token) {
        return $window.jwt_decode(token);
      } else {
        return null;
      }
    }

    function destroy() {
      $window.localStorage.removeItem(TOKEN_KEY);
    }

  }

})();