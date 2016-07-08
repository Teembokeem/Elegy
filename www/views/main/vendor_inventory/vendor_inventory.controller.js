(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorInventory.controller', VendorInventoryController);
  
  VendorInventoryController.$inject = ['$log', '$state', '$ionicPopup', '$scope'];

  function VendorInventoryController($log, $state, $ionicPopup, $scope) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Inventory', 'Controller');
    var vm = this;
    $scope.data = {};

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