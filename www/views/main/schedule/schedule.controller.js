(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Schedule.controller', ScheduleController);
  
  ScheduleController.$inject = ['$log', 'dataService', 'productService', 'EventStaticInfo', '$state'];

  function ScheduleController($log, dataService, productService, EventStaticInfo, $state) {
    // INSTANTIATIONS
    $log.instantiate('Schedule', 'controller');
    var vm = this;
    vm.passive = 'schedule';
    vm.schedule = {}

    // $log.info("your schedule:", vm.schedule)


    // LOCAL VARS
    var wholeSchedule = dataService.retrieveData('event').details
    vm.program = dataService.retrieveData('event').details.keepsake.program

    vm.schedule['Funeral Home'] = {
      date: wholeSchedule.funeralhome.date.date,
      location: wholeSchedule.funeralhome.funeralhome.item ? productService.getProduct(wholeSchedule.funeralhome.funeralhome.item).address : null,
      matchKey: 'funeralhome'
    }
    if (wholeSchedule.options.ceremony.item !== null) {
      vm.schedule['Ceremony'] = {
        date: wholeSchedule.options.ceremonydate.date,
        location: productService.getProduct(wholeSchedule.options.ceremony.item).address,
        matchKey: 'options'
      }
    }

    if (wholeSchedule.options.reception.item !== null) {
      vm.schedule['Reception'] = {
        date: wholeSchedule.options.receptiondate.date,
        location: productService.getProduct(wholeSchedule.options.reception.item).address,
        matchKey: 'options'
      }
    }

    if (wholeSchedule.options.visitation.date !== null) {
      vm.schedule['Visitation'] = {
        date: wholeSchedule.options.visitation.date,
        matchKey: 'options'
      }
    }

    if (wholeSchedule.options.burial.date !== null) {
      vm.schedule['Burial'] = {
        date: wholeSchedule.options.burial.date,
        matchKey: 'options'
      }
    }

    console.log("THIS IS THE PROGRAM", vm.program)
 

    // BOUND FUNCTIONS
    vm.travelToStep = function(key) {
      var step = EventStaticInfo.filter(function(step) {
        return step.eventKey === key
      })[0];
      dataService.setData(['eventStep', 'stepIndex'], [step, (step.step - 1).toString()])
      if (key === 'keepsake') {
        $state.go('app.departed-tab.forms', {tracker: 'program'});
      } else {
        $state.go('app.departed-tab.event', {step: step.title})

      }
    }

    // HELPERS
  }
})();