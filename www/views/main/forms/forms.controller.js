(function() {
  'use strict'

  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Forms.controller', FormsController);
  
  FormsController.$inject = ['$log', '$stateParams'];

  function FormsController($log, $stateParams) {
    // INSTANTIATIONS
    $log.instantiate('Forms', 'Controller');
    var vm = this;
    vm.formType = $stateParams.tracker

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();