(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log', 'productType', 'ProductDataTemplates', '$stateParams', 'vendorService', 'dataService'];

  function VendorProductController($log, productType, ProductDataTemplates, $stateParams, vendorService, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;
    vm.productBoiler = ProductDataTemplates.productBoiler
    vm.productTemplate = productType;
    $log.info("vals", productType, ProductDataTemplates);

    // LOCAL VARS
    vm.product = {
      type: $stateParams.product,
      vendor: dataService.retrieveData('vendor')._id
    };
    
    vm.cloud = {};

    // BOUND FUNCTIONS
    vm.submitProduct = function() {
      $log.info(vm.product, "say what")
      vendorService.createProduct(vm.product, vm.cloud.image)
    }

    // HELPERS

  }

})();