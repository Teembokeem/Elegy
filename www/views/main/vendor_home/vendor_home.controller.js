(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('VendorHome.controller', VendorHomeController);
  
  VendorHomeController.$inject = ['$log'];

  function VendorHomeController($log) {
    // INSTANTIATIONS
    $log.instantiate('Vendor Home', 'Controller');
    var vm = this;
    
    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS

  }

})();