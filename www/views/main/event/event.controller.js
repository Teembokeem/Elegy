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

    // BOUND FUNCTIONS
    vm.okay = function() {
      $log.info(dataService.getData(['event'],['event']))  
  }
    // HELPERS
    
  }

})();