(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService', '$state'];
  
  function LoginController($log, authService, $state) {
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
      authService.logIn(vm.credentials)
      .then(function(decodedToken) {
        $log.info("Credentials approved, ", decodedToken);
        $state.go('app.overview');
      }, function(err) {
        $log.info(err);
      })
    }
    
    // HELPERS
  }
  
})();