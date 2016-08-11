(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('UserSignup.controller', UserSignupController);
    
  UserSignupController.$inject = ['$state', '$log', 'userService', 'authService', 'dataService', 'eventService'];
  
  function UserSignupController($state, $log, userService, authService, dataService, eventService) {
    // INSTANTIATIONS
    $log.instantiate('User Signup', 'controller');
    var vm = this;
    var refGuest = dataService.retrieveData('refCodeUser');
    
    // LOCAL VARS
    vm.newUser = {
      first: refGuest ? refGuest.first : '',
      last: refGuest ? refGuest.last : '',
      email: refGuest ? refGuest.email : '',
      password: '',
      image: '/img/default.png'
    }
    
    //  BOUND FUNCTIONS
    vm.submitUserForm = function() {
      $log.info("Sending Form, ", vm.newUser);
      vm.newUser.email = vm.newUser.email.toLowerCase()
      if (refGuest) {
        userService
          .updateRefGuest(vm.newUser)
           .then(function(res) {
                // $log.info('Successfully created user, ' + res.data.data.email + ' ' +  res.data.id, res.data);
              return authService.logIn(vm.newUser);
            })
            .then(function(decodedToken) {
              return eventService.grabEventPackage(decodedToken._id)
            })
            .then(function(events) {
              // $log.info("event package?!?!?!!?!", events)
              dataService.removeData(['planningEvents', 'attendingEvents']);
              dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
              // $log.info('Logged In via Auth service login. ', decodedToken);
              $state.go('app.home');
           })
          .catch(function(err) {
            $log.error("We got an error! ", err);
          })
      } else {
        userService
          .signup(vm.newUser)
          .then(function(res) {
              // $log.info('Successfully created user, ' + res.data.data.email + ' ' +  res.data.id, res.data);
            return authService.logIn(vm.newUser);
          })
          .then(function(decodedToken) {
            // $log.info('Logged In via Auth service login. ', decodedToken);
            if (vm.vendor) {
              $state.go('app.vendor-signup');
            } else {
              eventService
                .grabEventPackage(decodedToken._id)
                .then(function(events) {
                  // $log.info("event package?!?!?!!?!", events)
                  dataService.removeData(['planningEvents', 'attendingEvents']);
                  dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
                  $state.go('app.home');
                })
            }
          })
          .catch(function(err) {
            $log.error("We got an error! ", err);
          })
        
    }
  }
    // HELPERS
  }
  
})();