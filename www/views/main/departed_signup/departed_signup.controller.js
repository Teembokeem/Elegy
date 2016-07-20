(function() {
  'use strict';
  // TODO:
    // 1, attach grabEventPackage to setupEvent. return from setupEvent method should be the token. 
  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'eventService', 'dataService', '$state', 'tokenService', 'userService'];

  function DepartedSignupController($log, eventService, dataService, $state, tokenService, userService) {
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
          return eventService.grabEventPackage(tokenService.decode()._id)
        })
        .then(function(events) {
          $state.go('^.departed-tab.home');
        })
        .catch(function(err) {
          if (err) console.log(err);
        })
    }

    // HELPERS
  }

})();