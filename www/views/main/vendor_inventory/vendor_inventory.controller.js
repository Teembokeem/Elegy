(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorInventory.controller', VendorInventoryController);
  
  VendorInventoryController.$inject = ['$log', '$state', '$ionicPopup', '$scope', 'VendorProducts', 'ProductDataTemplates'];

  function VendorInventoryController($log, $state, $ionicPopup, $scope, VendorProducts, ProductDataTemplates) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Inventory', 'Controller');
    $log.info("resolve dependencies", VendorProducts)
    var vm = this;
    $scope.data = {};
    vm.products = VendorProducts[0];
    vm.productTemplates = ProductDataTemplates;
    vm.productTypes = ProductDataTemplates.productTypes
    vm.productKeys = Object.keys(vm.productTypes)

    // LOCAL VARS


    // BOUND FUNCTIONS
    vm.createProduct = function() {
      $ionicPopup.show({
        templateUrl: 'views/templates/productType.html',
        title: 'Choose a Product Type',
        scope: $scope,
        buttons: [
          { text: 'OK', 
            onTap: function(e) {
              console.log($scope.data.option);
              $state.go('app.vendor-tab.vendor-product', {product: $scope.data.option})
              this.hide();  
          }
          },
          {text: 'CANCEL', 
            onTap: function(e) {
              console.log("ok :(")
              this.hide();
            }}
        ]
      })
    };



    // HELPERS
    

  };

})();