(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Controllers')
    .controller('VendorSignup.controller', VendorSignController);
  
  VendorSignController.$inject = ['$log'];

  function VendorSignController($log) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Signup', 'Controller')
    var vm = this;


    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();