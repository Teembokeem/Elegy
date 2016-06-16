(function() {
  'use strict';

  angular
    .module('Services')
    .factory('tokenService', tokenService);
  
  tokenService.$inject = ['$window', '$log'];

  function tokenService($window, $log) {
    $log.debug('Token Service loaded.');

    var TOKEN_KEY = 'the_dearly_departed';

    var service = {
      store: store,
      retrieve: retrieve,
      decode: decode,
      destroy: destroy
    };
    return service;

    function store(token) {
      $window.localStorage.setItem(TOKEN_KEY, token);
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