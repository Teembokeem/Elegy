(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('DepartedController', DepartedController);

  DepartedController.$inject = ['$log', 'dataService', 'event'];

  function DepartedController($log, dataService, event) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;

    // LOCAL VARS
    vm.event = event;
    $log.info("yes your event", event)
    // BOUND FUNCTIONS
    vm.okay = function() {
      $log.info(dataService.getData(['event'],['event']))  
    }
    // HELPERS
    
  }


})();