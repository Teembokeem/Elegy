(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log'];

  function EventController($log) {
    // INSTANTIATIONS
    $log.controller('Event');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
    
  }

})();