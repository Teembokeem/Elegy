(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('Departed.controller', DepartedController);

  DepartedController.$inject = ['$log', 'dataService', 'event'];

  function DepartedController($log, dataService, event) {
    // INSTANTIATIONS
    $log.instantiate('Departed', 'controller');
    var vm = this;

    // LOCAL VARS
    vm.event = event[0];
    $log.info("yes your event", event)
    // BOUND FUNCTIONS


    // HELPERS
    
  }


})();