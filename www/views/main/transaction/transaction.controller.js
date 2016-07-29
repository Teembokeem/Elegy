(function() {
  'use strict'
  // TODO: 
    // 1.
  console.log("hello transaction")
  angular
    .module('Controllers')
    .controller('Transaction.controller', TransactionController);
  
  TransactionController.$inject = ['$log', 'transactionService', 'brainTree'];

  function TransactionController($log, transactionService, brainTree) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Controller');
    var vm = this;
    var clientToken = brainTree;
    if (clientToken != null) {
      $log.info("client Token secured.")
    }

    // LOCAL VARS
    vm.val = "hello"

    // BOUND FUNCTIONS
    braintree.setup(
          brainTree,
          "dropin",
          { container: "payment-form",
            paymentMethodNonceReceived: function(event, nonce) {
              $log.debug("what", nonce, event)
            }
          }
        )

    // HELPERS

  }

})();