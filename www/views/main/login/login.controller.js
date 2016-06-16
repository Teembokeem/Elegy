(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService'];
  
  function LoginController($log, authService) {
    // INSTANTIATIONS
    $log.controller('Login')
    var vm = this;
    
    // LOCAL VARS
    vm.credentials = {
      email: 'elegy@email.com',
      password: 'elegy'
    };
    
    // BOUND FUNCTIONS
    vm.authenticate = function() {
      $log.info("Sending Credentials, ", vm.credentials);

    }
    
    // HELPERS
  }
  
})();