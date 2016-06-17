(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'userService'];

  function DepartedSignupController($log, userService) {
    // INSTANTIATIONS
    $log.controller('Departed Signup');
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
        .then(function(res) {
          $log.info('Successfully created assets: ', res.data);
        })
    }

    // HELPERS
  }

})();