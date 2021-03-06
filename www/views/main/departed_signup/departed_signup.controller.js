(function() {
  'use strict';
  // TODO:
    // 1, attach grabEventPackage to setupEvent. return from setupEvent method should be the token. 
  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', 'eventService', 'dataService', '$state', 'tokenService', 'userService', 'uploadService', 'blogService', '$ionicLoading'];

  function DepartedSignupController($log, eventService, dataService, $state, tokenService, userService, uploadService, blogService, $ionicLoading) {
    // INSTANTIATIONS
    $log.instantiate('Departed Signup', 'controller');
    var vm = this;

    // LOCAL VARS
    vm.newDeparted = {
      first: '',
      last: '',
      dob: null,
      dod: null
    }

    vm.dateSelected;

    vm.doDates = function(selector) {
      vm.dateSelected = selector;
    }
    
    vm.cloud = {};

    // BOUND FUNCTIONS
    vm.submitDepartedForm = function() {
      $log.info("Sending Departed Form, ");
      if (vm.cloud.image) {
        uploadService
          .uploadFile(vm.cloud.image, null, 'departed')
          .then(function(done) {
            $log.info("Success!")
            vm.newDeparted.image = done;
            $ionicLoading.show({
              templateUrl: 'views/templates/working.html'
            }).then(function() {
              userService
                .setupEvent(vm.newDeparted)
                .then(function(event) {
                  $log.info("your token")
                    dataService.setData(['departed'], [event.data.departed]);
                    return eventService.grabEventPackage(tokenService.decode()._id)
                })
                .then(function(events) {
                  $log.info("hello there")
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
                        $ionicLoading.hide()
                        $state.go('app.departed-tab.index', {name: vm.newDeparted.first })
                      })
                    } else {
                      $ionicLoading.hide()
                      $state.go('^.home');
                    }
                })
                .catch(function(err) {
                  if (err) console.log(err);
                })
            })
          })
          .catch(function(err) {
            $log.info("your error:", err)
          })

      } else {
        $ionicLoading.show({
              templateUrl: 'views/templates/working.html'
            }).then(function() {
              userService
                .setupEvent(vm.newDeparted)
                .then(function(event) {
                  $log.info("your token")
                    dataService.setData(['departed'], [event.data.departed]);
                    return eventService.grabEventPackage(tokenService.decode()._id)
                })
                .then(function(events) {
                  $log.info("hello there")
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
                        $ionicLoading.hide()
                        $state.go('app.departed-tab.index', {name: vm.newDeparted.first })
                      })
                    } else {
                      $ionicLoading.hide()
                      $state.go('^.home');
                    }
                })
                .catch(function(err) {
                  if (err) console.log(err);
                })
            })
      }
    }

    // HELPERS
  }

})();