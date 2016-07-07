(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorInventory.controller', VendorInventoryController);
  
  VendorInventoryController.$inject = ['$log', '$state'];

  function VendorInventoryController($log, $state) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Inventory', 'Controller');
    var vm = this;

    // LOCAL VARS


    // BOUND FUNCTIONS
    vm.createProduct = function() {
      $state.go('app.vendor-tab.vendor-product');
    };


    // HELPERS


  };

})();