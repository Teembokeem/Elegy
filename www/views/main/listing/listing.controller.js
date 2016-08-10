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
    // $log.info("listing", Listing[0]);



    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.bookmarkItem = function() {
      $log.instantiate("Listing Controller select item",  "method")
      eventService
        .updateEvent(vm.listing._id, dataService.retrieveData('event')['details'][dataService.retrieveData('eventStep').title.toLowerCase()]['_id'], dataService.retrieveData('eventStep').title.toLowerCase(), dataService.retrieveData('stepItem'), 'item')
        .then(function(res) {
          eventService
            .retrieveEvent(dataService.retrieveData('event')._id)
            .then(function(res) {
              dataService.setData(['event'], [res]);
            })
            .catch(function(err){
              $log.info("ehoh", err)
              return err
            })
        })
        .catch(function(err) {
          $log.info("err", err)
        })
      $state.go('app.departed-tab.event');
    }

    vm.purchaseItem = function() {
      $log.instantiate("Listing Controller Purchase Item", "method");
      $state.go('app.departed-tab.transaction')

    }
    // TODO order service to inject.

    // HELPERS
  }

})();