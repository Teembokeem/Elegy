(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log', 'productType', 'ProductDataTemplates'];

  function VendorProductController($log, productType, ProductDataTemplates) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;
    vm.type;
    vm.productBoiler = ProductDataTemplates.productBoiler
    vm.productTemplate = productType;
    $log.info("vals", productType, ProductDataTemplates);

    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.submitProduct = function() {
      $log.info("yo");
    }

    // HELPERS

  }

})();