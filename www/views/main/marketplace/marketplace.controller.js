(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Controllers')
    .controller('Marketplace.controller', MarketplaceController);

  MarketplaceController.$inject = ['$log', '$stateParams'];

  function MarketplaceController($log, $stateParams) {
    // INSTANTIATIONS
    $log.instantiate('Marketplace', 'controller');
    var vm = this;
    vm.params = $stateParams.category
    $log.info("Displaying marketplace for: ", $stateParams.category)

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();