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
      $log.instantiate("Listing Controller select item",  "method");
      if (dataService.retrieveData('eventStep').eventKey === 'interment') {
        eventService
          .updateEvent(vm.listing, dataService.retrieveData('event')['details'][dataService.retrieveData('eventStep').eventKey.toLowerCase()]['_id'], dataService.retrieveData('eventStep').eventKey.toLowerCase(), dataService.retrieveData('stepItem'), 'item')
          .then(function(res) {
            eventService
              .retrieveEvent(dataService.retrieveData('event')._id)
              .then(function(res) {
                dataService.setData(['event'], [res]);
                $state.go('app.departed-tab.event');
              })
              .catch(function(err){
                $log.info("ehoh", err)
                return err
              })
          })
          .catch(function(err) {
            $log.info("err", err)
          })
      } else {
          eventService
            .updateEvent(vm.listing, dataService.retrieveData('event')['_id'], dataService.retrieveData('eventStep').eventKey.toLowerCase(), dataService.retrieveData('stepItem'), 'item')
            .then(function(res) {
              eventService
                .retrieveEvent(dataService.retrieveData('event')._id)
                .then(function(res) {
                  dataService.setData(['event'], [res]);
                  $state.go('app.departed-tab.event');
                })
                .catch(function(err){
                  $log.info("ehoh", err)
                  return err
                })
            })
            .catch(function(err) {
              $log.info("err", err)
            })

      }
    }

    vm.purchaseItem = function() {
      $log.instantiate("Listing Controller Purchase Item", "method");
      $state.go('app.departed-tab.transaction')

    }
    // TODO order service to inject.

    // HELPERS
  }

})();