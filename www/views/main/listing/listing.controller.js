(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Listing.controller', ListingController)
  
  ListingController.$inject = ['$log', '$stateParams', 'Listing', 'eventService', '$state', 'ProductDataTemplates'];

  function ListingController($log, $stateParams, Listing, eventService, $state, ProductDataTemplates) {
    // INSTANTIATIONS
    $log.instantiate('Listing', 'controller');
    var vm = this;
    vm.listingType = $stateParams.listingName;
    vm.listing = Listing[0]
    $log.info("listing", Listing[0]);



    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.selectVenue = function() {
      eventService.updateEvent(vm.listing)
      $state.go('app.departed-tab.event');
    }

    // HELPERS
  }

})();