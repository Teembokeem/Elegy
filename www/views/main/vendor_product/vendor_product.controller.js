(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log', 'productType', 'ProductDataTemplates', '$stateParams', 'vendorService', 'authService', 'dataService', '$state'];

  function VendorProductController($log, productType, ProductDataTemplates, $stateParams, vendorService, authService, dataService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;
    vm.productBoiler = ProductDataTemplates.productBoiler
    vm.productTemplate = productType;
    // $log.info("vals", productType, ProductDataTemplates);

    // LOCAL VARS
    vm.product = {
      type: $stateParams.product,
      vendor: dataService.retrieveData('vendor')._id
    };

    vm.cloud = {};

    // BOUND FUNCTIONS
    vm.submitProduct = function() {
      // $log.info(vm.product, "say what")
      vendorService
        .createProduct(vm.product, vm.cloud.image)
        .then(function(res) {
          // $log.info("vendor pre flight info??", vm.product)
          return authService.currentUser();
        })
        .then(function(user) {
          // $log.info("vendor pre flight info??", user)
          return vendorService.grabVendorData(user._id)
        })
        .then(function(vendorData) {
          // $log.info("event package?!?!?!!?!", vendorData)
          dataService.setData(['vendor', 'vendorOrders', 'vendorProducts'], [vendorData.vendor, vendorData.vendor.orders, vendorData.vendor.products]);
        
          $state.go('app.vendor-tab.vendor-home')
        })
    }

    // HELPERS

  }

})();