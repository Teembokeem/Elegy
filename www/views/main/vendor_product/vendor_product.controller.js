(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log'];

  function VendorProductController($log) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();