(function() {
  'use strict'

  angular
    .module('Services')
    .factory('transactionService', transactionService);

  transactionService.$inject = ['$log', '$http'];

  function transactionService($log, $http) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Service');

    var service = {
      initializeBrainTree: initializeBrainTree
    }


    function initializeBrainTree() {
      $http({
        method: 'GET',
        url: url + '/client_token'
      })
      .then(function(response) {
        $log.debug("we got it back:", response.data);
        braintree.setup(
          response.data,
          "dropin",
          { container: "payment-form",
            paymentMethodNonceReceived: function(event, nonce) {
              $log.debug("what", nonce, event)
            }
          }
        )
      })
    }

    return service;
  } 

})();