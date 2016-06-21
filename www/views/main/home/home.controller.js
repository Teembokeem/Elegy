(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..???

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService'];

  function HomeController(urlFactory, $log, authService) {
    // INSTANTIATIONS
    $log.controller('Home');
    var vm = this;

    // LOCAL VARS
    vm.assets = authService.currentUser();

    // BOUND FUNCTIONS

    // HELPERS
  }

})();