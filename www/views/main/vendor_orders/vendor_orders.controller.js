(function() {
'use strict';
// TODO:
  // 1.

  angular
    .module('Controllers')
    .controller('VendorOrders.controller', VendorOrdersController);

  VendorOrdersController.$inject = ['$log', 'dataService'];
  function VendorOrdersController($log, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Orders', 'Controller')
    var vm = this;

    // LOCAL VARS
    vm.passive = 'completedOrders';
    vm.orders = dataService.retrieveData('vendorOrders');

    // BOUND FUNCTIONS

    // HELPERS
    
  }

})();