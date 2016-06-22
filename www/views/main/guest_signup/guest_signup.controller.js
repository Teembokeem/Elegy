(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestSignup.controller', GuestSignupController);
  
  GuestSignupController.$inject = ['$log'];

  function GuestSignupController($log) {
    // INSTANTIATIONS
    $log.instantiate('Guest Sign Up', 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();