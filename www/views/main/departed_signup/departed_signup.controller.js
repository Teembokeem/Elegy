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
    
    vm.cloud = {};

    // BOUND FUNCTIONS
    vm.submitDepartedForm = function() {
      $log.info("Sending Departed Form, ", vm.newDeparted);
      userService
        .setupEvent(vm.newDeparted, vm.cloud)
        .then(function(event) {
            return eventService.grabEventPackage(tokenService.decode()._id)
        })
        .then(function(events) {
          dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
          if (dataService.retrieveData('beforeState')) {
            eventService
              .retrieveEvent(dataService.retrieveData('planningEvents')[dataService.retrieveData('planningEvents').length - 1].event)
              .then(function(event) {
                dataService.setData(['event'], [event])
              })
            $state.go('app.departed-tab.index', {name: event.first })
          } else {
            $state.go('^.home');
          }
        })
        .catch(function(err) {
          if (err) console.log(err);
        })
    }

    // HELPERS
  }

})();