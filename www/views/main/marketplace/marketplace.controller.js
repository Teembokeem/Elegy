(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Controllers')
    .controller('Marketplace.controller', MarketplaceController);

  MarketplaceController.$inject = ['$log', '$stateParams', '$location', 'dataService', '$state', 'Marketplace'];

  function MarketplaceController($log, $stateParams, $location, dataService, $state,  Marketplace) {
    // INSTANTIATIONS
    $log.instantiate('Marketplace', 'controller');
    var vm = this;
    vm.params = $stateParams.category
    $log.info("Displaying marketplace for: ", $stateParams.category, Marketplace)
    vm.listings = Marketplace[0]
    // LOCAL VARS

    // BOUND FUNCTIONS
    vm.displayListing = function(data) {
      dataService.setData(['listing'], [data]);
      $state.go('app.departed-tab.listing', {venueName: data.venueName})
    }
    // HELPERS
  }

})();