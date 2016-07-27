(function() {
  'use strict'

  console.log("transaction service")
  angular
    .module('Services')
    .factory('transactionService', transactionService);

  transactionService.$inject = ['$log', '$http', 'urlFactory'];

  function transactionService($log, $http, urlFactory) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Service');

    var service = {
      initializeBrainTree: initializeBrainTree
    }
    return service;


    function initializeBrainTree() {
      $log.instantiate('Transaction Service Initialize BrainTree', 'method')
      return $http({
        method: 'GET',
        url: urlFactory + '/client_token'
      })
      .then(function(response) {
        $log.debug("success", response.data);
        // braintree.setup(
        //   response.data,
        //   "dropin",
        //   { container: "payment-form",
        //     paymentMethodNonceReceived: function(event, nonce) {
        //       $log.debug("what", nonce, event)
        //     }
        //   }
        // )
      })
    }

  } 

})();