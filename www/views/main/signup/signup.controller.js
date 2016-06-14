(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Signup.controller', SignupController);
    
  SignupController.$inject = ['$log'];
  
  function SignupController($log) {
    // INSTANTIATIONS
    $log.info('> Sign Up Controller activated <');
    var vm = this;
    
    // LOCAL VARS
    
    //  BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();