(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorProduct.controller', VendorProductController);
  
  VendorProductController.$inject = ['$log', 'ProductDataTemplates', '$ionicPopup', '$scope'];

  function VendorProductController($log, ProductDataTemplates, $ionicPopup, $scope) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Product', 'controller');
    var vm = this;
    vm.type;
    vm.productDataTemplates = ProductDataTemplates;
    $log.info(ProductDataTemplates);

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
    var productTypePopup = $ionicPopup.show({
      templateUrl: 'views/templates/loading.html',
      scope: $scope
    })
  }

})();