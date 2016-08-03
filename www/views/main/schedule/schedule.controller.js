(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Schedule.controller', ScheduleController);
  
  ScheduleController.$inject = ['$log', 'dataService', 'productService'];

  function ScheduleController($log, dataService, productService) {
    // INSTANTIATIONS
    $log.instantiate('Schedule', 'controller');
    var vm = this;
    vm.passive = 'schedule';
    vm.schedule = {}


    // LOCAL VARS
    var wholeSchedule = dataService.retrieveData('event').details
    vm.program = dataService.retrieveData('event').details.keepsake.program

    vm.schedule['Funeral Home'] = {
      date: wholeSchedule.funeralhome.date.date,
      location: wholeSchedule.funeralhome.funeralhome.item ? productService.getProduct(wholeSchedule.funeralhome.funeralhome.item).address : null
    }
    if (wholeSchedule.options.ceremony.item !== null) {
      vm.schedule['Ceremony'] = {
        date: wholeSchedule.options.ceremonydate.date,
        location: productService.getProduct(wholeSchedule.options.ceremony.item).address
      }
    }

    if (wholeSchedule.options.reception.item !== null) {
      vm.schedule['Reception'] = {
        date: wholeSchedule.options.receptiondate.date,
        location: productService.getProduct(wholeSchedule.options.reception.item).address
      }
    }

    if (wholeSchedule.options.visitation.date !== null) {
      vm.schedule['Visitation'] = {
        date: wholeSchedule.options.visitation.date
      }
    }

    if (wholeSchedule.options.burial.date !== null) {
      vm.schedule['Burial'] = {
        date: wholeSchedule.options.burial.date
      }
    }


    console.log(vm.schedule)    

    // BOUND FUNCTIONS

    // HELPERS
  }
})();