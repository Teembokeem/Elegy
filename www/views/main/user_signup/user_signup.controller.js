(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('UserSignup.controller', UserSignupController);
    
  UserSignupController.$inject = ['$log'];
  
  function UserSignupController($log) {
    // INSTANTIATIONS
    $log.controller('User Signup');
    var vm = this;
    
    // LOCAL VARS
    vm.newUser = {
      first: '',
      last: '',
      email: '',
      password: ''
    }
    
    //  BOUND FUNCTIONS
    vm.submitForm = function() {
      $log.info("Sending Form, ", vm.newUser)
    }
    
    // HELPERS
  }
  
})();