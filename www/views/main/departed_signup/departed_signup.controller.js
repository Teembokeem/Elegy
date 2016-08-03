(function() {
  'use strict';
  // TODO:
    // 1, attach grabEventPackage to setupEvent. return from setupEvent method should be the token. 
  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'eventService', 'dataService', '$state', 'tokenService', 'userService', 'uploadService', 'blogService'];

  function DepartedSignupController($log, eventService, dataService, $state, tokenService, userService, uploadService, blogService) {
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
      uploadService
        .uploadFile(vm.cloud.image, null, 'departed')
        .then(function(done) {
          $log.info("Success!", done)
          vm.newDeparted.image = done;
          userService
            .setupEvent(vm.newDeparted)
            .then(function(event) {
                return eventService.grabEventPackage(tokenService.decode()._id)
            })
            .then(function(events) {
              $log.info("hello there", events)
              dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
              if (dataService.retrieveData('beforeState')) {
                blogService
                  .grabBlog(dataService.retrieveData('planningEvents')[dataService.retrieveData('planningEvents').length - 1].blog)
                  .then(function(done) {
                    dataService.setData(['blog'], [done.data]);
                    eventService
                      .retrieveEvent(dataService.retrieveData('planningEvents')[dataService.retrieveData('planningEvents').length - 1].event)
                      .then(function(event) {
                        dataService.setData(['event'], [event])
                      })
                    $state.go('app.departed-tab.index', {name: event.first })
                  })
                } else {
                  $state.go('^.home');
                }
            })
            .catch(function(err) {
              if (err) console.log(err);
            })
        })
        .catch(function(err) {
          $log.info("your error:", err)
        })
    }

    // HELPERS
  }

})();