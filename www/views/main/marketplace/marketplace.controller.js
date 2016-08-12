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

    $log.info("your params", $stateParams)
    $log.info("Displaying marketplace for: ", $stateParams.category, Marketplace[0])
    vm.listings = Marketplace[0];
    $log.info("vm listings", Marketplace[0].length);
    
    vm.listings.forEach(function(listing) {
      listing.method = displayListing
    });

    if ($stateParams.marketplace != null) {
      vm.title = $stateParams.marketplace;
    }
    // marketplaceExtraParamsOCAL VARS

    // BOUND FUNCTIONS
    function displayListing(data, param) {
      dataService.setData(['listing'], [data]);
      dataService.setData(['vendor'], [data.vendor]);
      $state.go('app.departed-tab.listing', {listingName: param});
    }
    // HELPERS
  }

})();