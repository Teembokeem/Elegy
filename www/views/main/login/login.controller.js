(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService', '$state', 'userService'];
  
  function LoginController($log, authService, $state, userService) {
    // INSTANTIATIONS
    $log.controller('Login')
    var vm = this;
    
    // LOCAL VARS
    vm.credentials = {
      email: 'elegy@gmail.com',
      password: 'elegy'
    };
    
    // BOUND FUNCTIONS
    vm.authenticate = function() {
      $log.info("Sending Credentials, ", vm.credentials);
      
      authService.logIn(vm.credentials)
      .then(function(decodedToken) {
        $log.info("Credentials approved, ", decodedToken);
        return userService.grabEventPackage(decodedToken._id)
      })
      .then(function(events) {
        $log.info("event package?!?!?!!?!", events)
        $state.go('app.home');
      })
      .catch(function(err) {
        $log.info("errrrrr", err)
      })
    }
    
    // HELPERS
  }
  
})();