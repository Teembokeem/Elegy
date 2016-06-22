(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..??? 

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService', 'dataService'];

  function HomeController(urlFactory, $log, authService, dataService) {
    // INSTANTIATIONS
    $log.controller('Home');
    var vm = this;

    // LOCAL VARS
    vm.user = authService.currentUser();
    // BOUND FUNCTIONS

    // HELPERS
  }

})();