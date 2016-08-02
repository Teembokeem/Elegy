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
      $log.info("Client Token secured.")
    }

    // LOCAL VARS
    vm.item = [dataService.retrieveData('listing')]
    vm.vendor = dataService.retrieveData('vendor');
    vm.itemPrice = parseFloat(vm.item[0].price);
    vm.serviceFee = 3.00;
    vm.total = vm.itemPrice + vm.serviceFee

    // LOGS
    $log.info("vm.item:", vm.item, parseFloat(3.00));
    $log.info("vm.vendor:", vm.vendor);

    // BOUND FUNCTIONS

    // HELPERS
    braintree.setup(
      brainTree,
      "dropin",
      { container: "payment-form",
        paymentMethodNonceReceived: function(event, nonce) {
          $log.debug("nonce received", nonce, event)
          transactionService.queryBraintreeTransaction(nonce, vm.total)
        }
      }
    )

  }

})();