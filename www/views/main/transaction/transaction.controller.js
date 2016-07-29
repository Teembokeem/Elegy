(function() {
  'use strict'
  // TODO: 
    // 1.
  console.log("hello transaction")
  angular
    .module('Controllers')
    .controller('Transaction.controller', TransactionController);
  
  TransactionController.$inject = ['$log', 'transactionService'];

  function TransactionController($log, transactionService, brainTree) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Controller');

    var vm = this;

    // LOCAL VARS
    vm.val = "hello"

    // BOUND FUNCTIONS
    // transactionService.initializeBrainTree();

    // HELPERS

  }

})();