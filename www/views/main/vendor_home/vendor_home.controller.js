(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorHome.controller', VendorHomeController);
  
  VendorHomeController.$inject = ['$log', 'dataService'];

  function VendorHomeController($log, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Home', 'Controller');
    var vm = this;

    // LOCAL VARS
    vm.clicked = true;
    vm.passive = 'statistics';
    vm.orders = dataService.retrieveData('vendorOrders');

    // LOGS
    // $log.info("your orders:", vm.orders)

    // BOUND FUNCTIONS

    // HELPERS

  }

})();