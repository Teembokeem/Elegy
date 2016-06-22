(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService'];

  function EventController($log, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;

    // LOCAL VARS
    $log.info("afdjsafjdsalfjdsalkfjsdskalfas", dataService.getData('event'))

    // BOUND FUNCTIONS
    vm.okay = function() {
      $log.info(dataService.getData('event'))  
  }
    // HELPERS
    
  }

})();