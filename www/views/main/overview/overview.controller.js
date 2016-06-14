(function() {
  'use strict';
  //TODO:

  angular
    .module('Controllers')
    .controller('Overview.controller', OverviewController);

  OverviewController.$inject = ['$log'];

  function OverviewController($log) {
    // INSTANTIATIONS
    $log.controller('Overview');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();