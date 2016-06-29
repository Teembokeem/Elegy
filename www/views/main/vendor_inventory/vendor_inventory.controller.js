(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorInventory.controller', VendorInventoryController);
  
  VendorInventoryController.$inject = ['$log'];

  function VendorInventoryController($log) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Inventory', 'Controller');
    var vm = this;

    // LOCAL VARS


    // BOUND FUNCTIONS


    // HELPERS


  };

})();