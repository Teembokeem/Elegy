(function() {
  'use strict';

  angular
    .module('Configs')
    .factory('tokenSigningService', tokenSigningService);
  
  tokenSigningService.$inject = ['$log', 'tokenService'];

  function tokenSigningService($log, tokenService) {
    return {
      request: signWithToken
    };

    function signWithToken(request) {
      console.log('SENDING', request);
      var isCloud = request.url.indexOf( 'api.cloudinary' )
      if (tokenService.retrieve() && isCloud < 0) {
        // $log.debug('Token exists: signing request.');
        request.headers['Authorization'] = `Bearer ${tokenService.retrieve()}`;
      }

      return request;
    }
  }
})();