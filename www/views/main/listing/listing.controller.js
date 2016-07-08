(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Listing.controller', ListingController)
  
  ListingController.$inject = ['$log', '$stateParams', 'Listing', 'eventService', '$state'];

  function ListingController($log, $stateParams, Listing, eventService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Listing', 'controller');
    var vm = this;
    vm.venue = $stateParams.venueName;
    vm.data = Listing[0]
    $log.info("listing", Listing[0])

    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.selectVenue = function() {
      eventService.updateEvent(vm.data)
      $state.go('app.departed-tab.event');
    }

    // HELPERS
  }

})();