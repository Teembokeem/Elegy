(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Controllers')
    .controller('VendorSignup.controller', VendorSignController);
  
  VendorSignController.$inject = ['$log', 'userService', '$state'];

  function VendorSignController($log, userService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Signup', 'Controller')
    var vm = this;


    // LOCAL VARS
    vm.newVendor = {
      businessName: '',
      address: '',
      phone: {
        personal: '',
        business: ''
      }
    };

    // BOUND FUNCTIONS
    vm.submitVendorForm = function() {
      // $log.info("Sending Form, ", vm.newVendor);
      userService
        .setupVendor(vm.newVendor)
        .then(function(res) {
          console.log("res?", res)
          $state.go('app.vendor-tab.vendor-home');
        })
        .catch(function(err){
          console.log("ohnoes,", err)
        })
    };

    // HELPERS
  }

})();