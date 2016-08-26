(function() {
  'use strict'

  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Forms.controller', FormsController);
  
  FormsController.$inject = ['$log', '$stateParams', 'dataService', 'eventService', '$state', 'departedService', 'vendorService'];

  function FormsController($log, $stateParams, dataService, eventService, $state, departedService, vendorService) {
    // INSTANTIATIONS
    $log.instantiate('Forms', 'Controller');
    var vm = this;
    var eventStep = dataService.retrieveData('eventStep')
    var departed = dataService.retrieveData('departed')._id;
    var insertionValue = $stateParams.insertion;

    vm.formType = $stateParams.tracker;
    vm.formPart;
    vm.step = dataService.retrieveData('eventStep')['eventKey']
    vm.eventId = dataService.retrieveData('event')['_id']
    vm.newMember = null;
    vm.newOfficiant = null;
    vm.editingOfficiant = false;
    vm.editingEulogizer = false;
    vm.title;

    // LOGS
    $log.info('departed', departed)
    $log.info('state params', $stateParams)
    $log.info("form type", vm.formType)

    // LOCAL VARS
    // var errCodes = {
    //   gen: 'Error: Fields are empty: ',
    //   409: 'Error: email exists, please try another email!',
    //   email: 'Error: email is not in the proper format. Please use this format: example@[emailProvider].com'
    // }

    // vm.fieldsHandler = '';
    // vm.errorHandler = [];
    // var errDupe = [];
    // var errArr = [];

    // Object.keys(vm.newUser).forEach(function(prop, idx) {
    //   if (vm.newUser[prop] === "" && errArr.indexOf(prop) === -1)  {
    //     errArr.push(prop)
    //   } else if (errArr.indexOf(prop) != -1) {
    //     errDupe.push(idx)
    //   } else if (prop === 'email' && vm.newUser.email.indexOf('@') === -1) {
    //     vm.errorHandler.push(errCodes.email)
    //   }
    //   if (Object.keys(vm.newUser).length - 1 === idx) {
    //     $log.info("dONE", errArr, errDupe)
    //     errDupe.forEach(function(num) {
    //       errArr.splice(num, 1)
    //     })
    //     return errArr;
    //   }
    // });



    switch(vm.formType) {
      case 'program':
        $log.info("program case");
        vm.program = dataService.retrieveData('event')['details']['keepsake']['program'];
        vm.title = 'Edit Program'
        break;
      case 'Venue':
        $log.info("yay venues");
        vm.title = 'Add Location'
        
    }

    // BOUND FUNCTIONS
    vm.processAction = function(formPart, data) {
      switch(formPart) {
        case 'members':
        $log.info("doing it 1")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newMember = null;
          // $log.info(vm.program);          
          break;
        case 'pallbearers':
        $log.info("doing it 2")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newBearer = null;    
          // $log.info(vm.program);      
          break;
        case 'officiant':  
        $log.info("doing it 3")
          if (vm.editingOfficiant === true) {
            vm.formPart = formPart;
            vm.editingOfficiant = false;
            vm.newOfficiant = null;
            vm.program.officiant = data;
            // $log.info(vm.program);
            break;
          } else {
            vm.editingOfficiant = true;
            // $log.info(vm.editingOfficiant, vm.newOfficiant)
            break;
          }
        case 'eulogizer':  
        $log.info("doing it 4")
        if (vm.editingEulogizer) {
          vm.formPart = formPart;
          vm.editingEulogizer = false;
          vm.newEulogizer = null;
          vm.program.eulogizer = data;
          // $log.info(vm.program)
        } else {
          vm.editingEulogizer = true;
          // $log.info(vm.editingEulogizer, vm.newEulogizer)
        }
          break;
        case 'songs':
        $log.info("doing it 5")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newSong = null;          
          break;
        case 'readings':
        $log.info("doing it 6")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newReading = null;          
          break;
      }
    }

    vm.updateProgram = function() {
      $log.info("hi")
      eventService
        .updateEvent(vm.program, vm.eventId, vm.step, vm.formType, vm.formPart)
        .then(function(done) {
          // $log.info("Success", done);
          eventService
            .retrieveEvent(vm.eventId)
            .then(function(done) {
              dataService.setData(['event'], [done])
              $state.go('app.departed-tab.event', {step: eventStep.tracker})
            })
            .catch(function(err) {
              $log.info("error", err)
            })
        })
        .catch(function(err) {
          $log.info("error", err)
        })
    }

    vm.createCustomVenue = function() {
      $log.info("your vals", vm.venue);
      vm.venue.address = vm.venue.street + " " + vm.venue.city +  " " + vm.venue.state +  " " + vm.venue.zip;
      delete vm.venue.street
      delete vm.venue.city
      delete vm.venue.state
      delete vm.venue.zip
      vendorService
        .createCustomVenue(vm.venue)
        .then(function(product) {
          eventService
            .updateEvent(product, dataService.retrieveData('event')['_id'], dataService.retrieveData('eventStep').eventKey.toLowerCase(), insertionValue, 'item')
            .then(function(res) {
              eventService
                .retrieveEvent(dataService.retrieveData('event')._id)
                .then(function(res) {
                  dataService.setData(['event'], [res]);
                  $state.go('app.departed-tab.event', {step: eventStep.tracker});
                })
                .catch(function(err){
                  $log.info("ehoh", err)
                  return err
                })
            })
          })  
            .catch(function(err) {
              $log.info("err", err)
            })
    }

    vm.removeItem = function(index, part) {
      part.splice(index, 1);
    }

    vm.submitEulogy = function(eulogy) {
      $log.info("Forms Controller Submit Eulogy", 'method');
      eventService
        .updateEvent(eulogy, vm.eventId, vm.step, vm.formType, null)
        .then(function(event) {
          // $log.info("Success, status should be 2", event);
          dataService.setData(['event'], [event]);
          // $log.info("your departed.....", departed)
          departedService
            .updateEulogy(departed, eulogy)
            .then(function(departed) {
              // $log.info("Success, departed saved", departed)
              dataService.setData(['departed'], [departed]);
              $state.go('app.departed-tab.event', {step: eventStep.tracker})
            })
        })
    }

    // HELPERS
  }

})();