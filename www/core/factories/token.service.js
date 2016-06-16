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

    function store() {
      
    }

    function retrieve() {

    }

    function decode() {

    }

    function destroy() {

    }

  }

})();