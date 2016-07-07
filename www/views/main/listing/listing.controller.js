(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Listing.controller', ListingController)
  
  ListingController.$inject = ['$log', '$stateParams', 'Listing'];

  function ListingController($log, $stateParams, Listing) {
    // INSTANTIATIONS
    $log.instantiate('Listing', 'controller');
    var vm = this;
    vm.venue = $stateParams.venueName;
    vm.data = Listing[0]
    $log.info("listing", Listing[0])

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();