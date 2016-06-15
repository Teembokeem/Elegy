(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Schedule.controller', ScheduleController);
  
  ScheduleController.$inject = ['$log'];

  function ScheduleController($log) {
    // INSTANTIATIONS
    $log.controller('Schedule');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }
})();