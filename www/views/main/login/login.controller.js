(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log'];
  
  function LoginController($log) {
    // INSTANTIATIONS
    $log.controller('Login')
    var vm = this;
    
    // LOCAL VARS
    vm.credentials = {
      user: '',
      password: ''
    };
    
    // BOUND FUNCTIONS
    vm.authenticate = function() {

    }
    
    // HELPERS
  }
  
})();