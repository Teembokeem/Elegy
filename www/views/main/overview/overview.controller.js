(function() {
  'use strict';
  //TODO:

  angular
    .module('Controllers')
    .controller('Overview.controller', OverviewController);

  OverviewController.$inject = ['$log'];

  function OverviewController($log) {
    // INSTANTIATIONS
    $log.info('> Overview Controller activated. <');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();