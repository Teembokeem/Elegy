(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Program.controller', ProgramController);

  ProgramController.$inject = ['$log'];

  function ProgramController($log) {
    // INSTANTIATIONS
    $log.instantiate('Program', 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();