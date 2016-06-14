(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Program.controller', ProgramController);

  ProgramController.$inject = ['$log'];

  function ProgramController($log) {
    // INSTANTIATIONS
    $log.controller('Program');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();