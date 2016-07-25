(function() {
  'use strict'
  // TODO: 
    // 1.

  angular
    .module('Controllers')
    .controller('Transaction.controller', TransactionController);
  
  TransactionController.$inject = ['$log'];

  function TransactionController($log) {
    // INSTANTIATIONS
    $log.instantiate('Transaction', 'Controller');
    var vm = this;

    // LOCAL VARS
    vm.val = "hello"

    // BOUND FUNCTIONS

    // HELPERS

  }

})();