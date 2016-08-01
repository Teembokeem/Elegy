(function() {
  'use strict'
  // TODO: 
    // 1.
  console.log("hello transaction")
  angular
    .module('Controllers')
    .controller('Transaction.controller', TransactionController);
  
  TransactionController.$inject = ['$log', 'transactionService', 'brainTree', 'dataService'];

  function TransactionController($log, transactionService, brainTree, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Controller');
    var vm = this;
    var clientToken = brainTree;
    if (clientToken != null) {
      $log.info("client Token secured.")
    }

    // LOCAL VARS
    vm.item = [dataService.retrieveData('listing')]
    vm.vendor = dataService.retrieveData('vendor')

    // LOGS
    $log.info("vm.item:", vm.item)
    $log.info("vm.vendor:", vm.vendor)

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