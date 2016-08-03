(function() {
  'use strict'

  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Forms.controller', FormsController);
  
  FormsController.$inject = ['$log', '$stateParams', 'dataService', 'eventService', '$state'];

  function FormsController($log, $stateParams, dataService, eventService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Forms', 'Controller');
    var vm = this;
    vm.formType = $stateParams.tracker;
    vm.formPart;
    var eventStep = dataService.retrieveData('eventStep')
    vm.step = dataService.retrieveData('eventStep')['eventKey']
    vm.eventId = dataService.retrieveData('event')['_id']
    vm.newMember = null;
    vm.newOfficiant = null;
    vm.editingOfficiant = false;
    vm.editingEulogizer = false;

    // LOCAL VARS
    switch(vm.formType) {
      case 'program':
        $log.info("program case");
        vm.program = dataService.retrieveData('event')['details']['keepsake']['program']
        break;
    }
    // BOUND FUNCTIONS
    vm.processAction = function(formPart, data) {
      switch(formPart) {
        case 'members':
        $log.info("doing it 1")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newMember = null;
          $log.info(vm.program);          
          break;
        case 'pallbearers':
        $log.info("doing it 2")
          vm.formPart = formPart;
          vm.program[formPart].push(data);
          vm.newBearer = null;    
          $log.info(vm.program);      
          break;
        case 'officiant':  
        $log.info("doing it 3")
          vm.formPart = formPart;
          vm.editingOfficiant = true;
          vm.program.officiant = data;
          vm.newOfficiant = null;
          $log.info(vm.program);
          break;
        case 'eulogizer':  
        $log.info("doing it 4")
          vm.formPart = formPart;
          vm.editingEulogizer = true;
          vm.program.eulogizer = data;
          vm.newEulogizer = null;
          $log.info(vm.program)
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
          $log.info("Success", done);
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

    // HELPERS
  }

})();