(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'userService', 'dataService', '$state'];

  function DepartedSignupController($log, userService, dataService, $state) {
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
          dataService.setData('event', res.data.event)
          dataService.setData('departed', res.data.departed);
          $state.go('^.event');
        })
        .catch(function(err) {
          if (err) console.log(err);
        })
    }

    // HELPERS
  }

})();