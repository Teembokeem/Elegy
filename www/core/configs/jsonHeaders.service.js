(function() {
  'use strict';

  angular
    .module('Configs')
    .factory('jsonHeadersService', jsonHeadersService)
  
  jsonHeadersService.$inject = ['$log'];

  function jsonHeadersService($log) {
    return {
      request: addJsonHeaders
    };

    function addJsonHeaders(request) {
      $log.debug('Setting JSON Headers..', request);
      request.headers['Content-Type'] = 'application/json';
      return request;
    }
  }

})();