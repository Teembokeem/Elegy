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
      switch (errCode) {
        case 482:
          return 'Error: Code already submitted by User:: ' + errCode.body.first + " " + errCode.body.last
          break;
      }
    }



    return service;
  }
})();