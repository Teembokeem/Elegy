(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..??? 

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService', 'dataService', 'events'];

  function HomeController(urlFactory, $log, authService, dataService, events) {
    // INSTANTIATIONS
    $log.instantiate('Home', 'controller');
    var vm = this;

    // LOCAL VARS
    vm.user = authService.currentUser();
    vm.assets = events[0].concat(events[1]);
    $log.info(vm.assets)
    
    // BOUND FUNCTIONS
    
    // HELPERS

  }

})();