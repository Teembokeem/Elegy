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
    var errCodes = {
      gen: 'Error: Fields are empty: ',
      409: 'Error: email exists, please try another email!',
      email: 'Error: email is not in the proper format. Please use this format: example@[emailProvider].com'
    }
    
    // LOCAL VARS
    vm.newUser = {
      first: refGuest ? refGuest.first : '',
      last: refGuest ? refGuest.last : '',
      email: refGuest ? refGuest.email : '',
      password: '',
      image: '../img/default.png'
    }
    vm.fieldsHandler = '';
    vm.errorHandler = [];
    
    //  BOUND FUNCTIONS
    vm.submitUserForm = function() {
      vm.errorHandler = [];
      $log.info("Sending Form, ", vm.newUser);
      var errDupe = [];
      var errArr = [];
      Object.keys(vm.newUser).forEach(function(prop, idx) {
        $log.info("your prop", prop, vm.newUser[prop] === "", errArr.indexOf(prop))
        if (vm.newUser[prop] === "" && errArr.indexOf(prop) === -1)  {
          errArr.push(prop)
        } else if (vm.newUser[prop] === "" && errArr.indexOf(prop) != -1) {
          errDupe.push(idx)
        } else if (prop === 'email' && vm.newUser.email.indexOf('@') === -1) {
          errArr.push(prop)
          vm.errorHandler.push(errCodes.email)
        } else {

        }
        if (Object.keys(vm.newUser).length - 1 === idx) {
          $log.info("dONE", errArr, errDupe, vm.newUser)
          errDupe.forEach(function(num) {
            errArr.splice(num, 1)
          })
          return errArr;
        }
      })
      if (errArr.length === 0) {
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
              $log.info("THIS SERROR", err)
              vm.fieldsHandler = errCodes[err.status]
              vm.errorHandler.push(vm.fieldsHandler)
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
              $log.info("THIS SERROR", err)
              vm.fieldsHandler = errCodes[err.status]
              vm.errorHandler.push(vm.fieldsHandler)
            })
      }
    } else {
      $log.info("UHOH", errArr);
      var str = errCodes.gen;
      errArr.forEach(function(error, idx) {
        str = str.concat(" " + error + ",");
        $log.info("your string", str)
        if (errArr.length - 1 === idx) console.log("done", str); vm.fieldsHandler = str;
      })
      $log.info("your errors", vm.errorHandler)
      vm.fieldsHandler != null ? vm.errorHandler.push(vm.fieldsHandler) : ""
      // $log.info("your errors", vm.errorHandler)


    }
  }
    // HELPERS
    

  }
  
})();