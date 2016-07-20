(function() {
  'use strict';
  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Listing.controller', ListingController)
  
  ListingController.$inject = ['$log', '$stateParams', 'Listing', 'eventService', '$state', 'ProductDataTemplates', 'EventDataTemplates', 'dataService'];

  function ListingController($log, $stateParams, Listing, eventService, $state, ProductDataTemplates, EventDataTemplates, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Listing', 'controller');
    var vm = this;
    vm.listingType = $stateParams.listingName;
    vm.listing = Listing[0]
    $log.info("listing", Listing[0]);



    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.selectVenue = function() {
      eventService.updateEvent(vm.listing._id, dataService.retrieveData('event')._id)
      $state.go('app.departed-tab.event');
    }

    // HELPERS
  }

})();