(function() {
  'use strict';
  //TODO:
  // 1. use tokenservice to dictate whether user sees carousel aka this controller else skip straight to event controller.
  angular
    .module('Controllers')
    .controller('Overview.controller', OverviewController);

  OverviewController.$inject = ['$log'];

  function OverviewController($log) {
    // INSTANTIATIONS
    $log.instantiate('Overview', 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();