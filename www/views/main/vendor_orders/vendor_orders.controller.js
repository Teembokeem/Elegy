(function() {
'use strict';
// TODO:
  // 1.

  angular
    .module('Controllers')
    .controller('VendorOrders.controller', VendorOrdersController);

  VendorOrdersController.$inject = ['$log'];
  function VendorOrdersController($log) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Orders', 'Controller')
    var vm = this;

    // LOCAL VARS
    vm.passive = 'completedOrders';

    // BOUND FUNCTIONS

    // HELPERS
    
  }

})();