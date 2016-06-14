(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log'];

  function DepartedSignupController($log) {
    // INSTANTIATIONS
    $log.info('> Departed Sign Up Controller activated<');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();