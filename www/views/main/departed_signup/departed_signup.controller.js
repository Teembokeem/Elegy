(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'userService', 'dataService', '$state', 'authService'];

  function DepartedSignupController($log, userService, dataService, $state, authService) {
    // INSTANTIATIONS
    $log.instantiate('Departed Signup', 'controller');
    var vm = this;

    // LOCAL VARS
    vm.newDeparted = {
      first: '',
      last: '',
      dob: '',
      dod: ''
    }

    // BOUND FUNCTIONS
    vm.submitDepartedForm = function() {
      $log.info("Sending Departed Form, ", vm.newDeparted);
      userService
        .setupEvent(vm.newDeparted)
        .then(function(event) {
          $log.info('successfully saved departed framework. ', event);
          $state.go('^.home');
        })
        .catch(function(err) {
          if (err) console.log(err);
        })
    }

    // HELPERS
  }

})();