(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('UserSignup.controller', UserSignupController);
    
  UserSignupController.$inject = ['$state', '$log', 'userService', 'authService'];
  
  function UserSignupController($state, $log, userService, authService) {
    // INSTANTIATIONS
    $log.instantiate('User Signup', 'controller');
    var vm = this;
    
    // LOCAL VARS
    vm.newUser = {
      first: '',
      last: '',
      email: '',
      password: ''
    }
    
    //  BOUND FUNCTIONS
    vm.submitUserForm = function() {
      $log.info("Sending Form, ", vm.newUser);
      userService
        .signup(vm.newUser)
        .then(function(res) {
            $log.info('Successfully created user, ' + res.data.data.email + ' ' +  res.data.id, res.data);
            return authService.logIn(vm.newUser);
        })
        .then(function(decodedToken) {
          $log.info('Logged In via Auth service login. ', decodedToken);
          if (vm.vendor) {
            $state.go('app.vendor-signup');
          } else {
            $state.go('app.departed-signup');
          }
        })
        .catch(function(err) {
          $log.error("We got an error! ", err);
        })
    }
    
    // HELPERS
  }
  
})();