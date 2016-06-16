(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('UserSignup.controller', UserSignupController);
    
  UserSignupController.$inject = ['$state', '$log', 'userService', 'authService'];
  
  function UserSignupController($state, $log, userService, authService) {
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
      $log.info("Sending Form, ", vm.newUser);
      userService
        .create(vm.newUser)
        .then(function(res) {
            $log.info('Successfully created user, ' + res.data.first + ' ' +  res.data.last, res.data);
            return authService.logIn(vm.newUser);
        })
        .then(function(decodedToken) {
          $log.info('Logged In via Auth service login. ', decodedToken);
          $state.go('app.departed-signup');
        })
        .catch(function(err) {
          $log.error("We got an error! ", err);
        })
    }
    
    // HELPERS
  }
  
})();