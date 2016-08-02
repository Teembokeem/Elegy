(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Schedule.controller', ScheduleController);
  
  ScheduleController.$inject = ['$log'];

  function ScheduleController($log) {
    // INSTANTIATIONS
    $log.instantiate('Schedule', 'controller');
    var vm = this;
    vm.passive = 'schedule';

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }
})();