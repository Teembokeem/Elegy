(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log', 'productType'];

  function VendorProductController($log, productType) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;
    vm.type;
    vm.productDataTemplates = productType;
    $log.info(productType);

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS

  }

})();