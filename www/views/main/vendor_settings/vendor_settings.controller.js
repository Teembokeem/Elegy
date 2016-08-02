(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('VendorSettings.controller', VendorSettingsController);

  VendorSettingsController.$inject = ['$log', 'dataService'];
  function VendorSettingsController($log, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Settings', 'Controller');
    var vm = this;
    vm.activeListing;
    
    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
    

    
      // var vendorProduct = dataService.retrieveData('vendorProducts').filter(function(product) {
      //   return product.__t == true
      // })
      // if (vendorProduct) {
      //   vm.activeListing = vendorProduct[0]['activeListing'];
      // }
  }
})();