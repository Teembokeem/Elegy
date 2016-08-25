(function() {
  'use strict';

  angular
    .module('Services')
    .factory('errorHandlerService', errorHandlerService);
  
  errorHandlerService.$inject = ['$log'];

  function errorHandlerService($log) {
    $log.instantiate('Error Handler', 'Service');

    var service = {
      parseErrorCodes: parseErrorCodes
    };

    function parseErrorCodes(errCode) {
      switch (errCode.status) {
        case 482:
          $log.info("parse error codes 482 received..")
          return "Error: You've already added the funeral event: " + errCode.body.first + " " + errCode.body.last
          break;
      }
    }



    return service;
  }
})();