(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Listing.controller', ListingController)
  
  ListingController.$inject = ['$log'];

  function ListingController($log) {
    // INSTANTIATIONS
    $log.instantiate('Listing', 'controller');
    var vm = this;
    
    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();