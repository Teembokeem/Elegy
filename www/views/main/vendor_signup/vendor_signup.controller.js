(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Controllers')
    .controller('VendorSignup.controller', VendorSignController);
  
  VendorSignController.$inject = ['$log', 'userService', '$state', '$scope', '$ionicPopup', 'ProductDataTemplates', 'tokenService', 'vendorService', 'dataService'];

  function VendorSignController($log, userService, $state, $scope, $ionicPopup, ProductDataTemplates, tokenService, vendorService, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Signup', 'Controller')
    var vm = this;
    var popup;



    // LOCAL VARS
    $scope.venues = ProductDataTemplates.venueTypes;

    vm.chosenValue = false;

    vm.newVendor = {
      businessName: '',
      address: '',
      phone: {
        personal: '',
        business: ''
      },
      type: null
    };

    $scope.newVendor = vm.newVendor;

    $scope.$watch('newVendor.venue', function(newVal, oldVal, scope) {
      if (newVal === true) {
        popup = $ionicPopup.show({
          templateUrl: 'views/templates/venueType.html',
          title: 'Choose a Venue Type',
          scope: $scope
        })
      }
    })

    // BOUND FUNCTIONS
    vm.setVenueType = function(a) {
      vm.newVendor.type = a
      $log.info("venue type", vm.newVendor.type, a)
      popup.close();
        vm.chosenVenue = true;
    }

    vm.submitVendorForm = function() {
      $log.info("Sending Form, ", vm.newVendor);
      userService
        .setupVendor(vm.newVendor)
        .then(function(res) {
                return vendorService.grabVendorData(tokenService.decode()._id)

              .then(function(vendorData) {
                // $log.info("vendor data", vendorData)
                dataService.setData(['vendor', 'vendorProducts'], [vendorData.vendor, vendorData.vendor.products]);
                return vendorService.grabVendorOrders(vendorData.vendor._id)
              })
              .then(function(vendorOrders) {
                // $log.info("vendor orders received", vendorOrders);
                dataService.setData(['vendorOrders'], [vendorOrders]);
          $state.go('app.vendor-tab.vendor-home');
              })
        })
        .catch(function(err){
          console.log("ohnoes,", err)
        })
    }
    // HELPERS
  }

})();