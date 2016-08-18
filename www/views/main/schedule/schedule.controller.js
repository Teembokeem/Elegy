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
    vm.schedule = [];

    $log.info("your schedule:", vm.schedule)



    // LOCAL VARS
    var wholeSchedule = dataService.retrieveData('event').details


    // vm.schedule['Funeral Home'] = {
    //   date: wholeSchedule.funeralhome.date.date,
    //   location: wholeSchedule.funeralhome.funeralhome.item != null || undefined ? productService.grabProduct(wholeSchedule.funeralhome.funeralhome.item).then(function(product) { console.log('your product', product); return product}) : null,
    //   matchKey: 'funeralhome'
    // }
    // if (wholeSchedule.options.ceremony.item !== null) {
    //   vm.schedule['Ceremony'] = {
    //     date: wholeSchedule.options.ceremonydate.date,
    //     location: productService.grabProduct(wholeSchedule.options.ceremony.item).address,
    //     matchKey: 'options'
    //   }
    // }

    // if (wholeSchedule.options.reception.item !== null) {
    //   vm.schedule['Reception'] = {
    //     date: wholeSchedule.options.receptiondate.date,
    //     location: productService.grabProduct(wholeSchedule.options.reception.item).address,
    //     matchKey: 'options'
    //   }
    // }

    // if (wholeSchedule.options.visitation.item !== null) {
    //   vm.schedule['Visitation'] = {
    //     date: wholeSchedule.options.visitationdate.date,
    //     location: productService.grabProduct(wholeSchedule.options.visitation.item).address,
    //     matchKey: 'options'
    //   }
    // }

    // if (wholeSchedule.options.burial.item !== null) {
    //   vm.schedule['Burial'] = {
    //     date: wholeSchedule.options.burialdate.date,
    //       location: productService.grabProduct(wholeSchedule.options.burial.item).address,
    //     matchKey: 'options'
    //   }
    // }

    // console.log("THIS IS THE PROGRAM", wholeSchedule)
    console.log("THIS IS THE PROGRAM", vm.schedule)

    var keys = [
      {
        prop1: 'funeralhome',
        prop2: 'date',
        prop3: 'funeralhome',
        dest: 'Funeral Home'
      },
      {
        prop1: 'options',
        prop2: 'ceremonydate',
        prop3: 'ceremony',
        dest: 'Ceremony'
      },
      {
        prop1: 'options',
        prop2: 'receptiondate',
        prop3: 'reception',
        dest: 'Reception'
      },
      {
        prop1: 'options',
        prop2: 'visitationdate',
        prop3: 'visitation',
        dest: 'Visitation'
      },
      {
        prop1: 'options',
        prop2: 'burialdate',
        prop3: 'burial',
        dest: 'Burial'
      }
    ]


    keys.forEach(function(keySet) {
      if (wholeSchedule[keySet.prop1][keySet.prop3]['item'] != null || undefined) {
        productService.grabProduct(wholeSchedule[keySet.prop1][keySet.prop3]['item'])
          .then(function(product) {
            vm.schedule.push( {
              date: wholeSchedule[keySet.prop1][keySet.prop2]['date'],
              location: product.name,
              address: product.address,
              matchKey: keySet.prop1,
              dest: keySet.dest
            })
          })
      } else {
            vm.schedule.push( {
              date: wholeSchedule[keySet.prop1][keySet.prop2]['date'],
              matchKey: keySet.prop1,
              dest: keySet.dest
            })

      }
    })

 
    console.log("THIS IS THE PROGRAM", vm.schedule)

    // BOUND FUNCTIONS
    vm.travelToStep = function(key) {
      var step = EventStaticInfo.filter(function(step) {
        return step.eventKey === key
      })[0];
      dataService.setData(['eventStep', 'stepIndex'], [step, (step.step - 1).toString()])
     
      $state.go('app.departed-tab.event', {step: step.title})

    }

    // HELPERS
  }
})();