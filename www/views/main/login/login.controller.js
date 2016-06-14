(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log'];
  
  function LoginController($log) {
    // INSTANTIATIONS
    $log.info('> Login Controller activated <')
    var vm = this;
    
    // LOCAL VARS
    
    // BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();