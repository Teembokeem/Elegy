(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('UserSignup.controller', UserSignupController);
    
  UserSignupController.$inject = ['$log'];
  
  function UserSignupController($log) {
    // INSTANTIATIONS
    $log.info('> User Sign Up Controller activated <');
    var vm = this;
    
    // LOCAL VARS
    
    //  BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();