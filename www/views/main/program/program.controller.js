(function() {
  'use strict'

  angular
    .module('Controllers')
    .controller('Program.controller', ProgramController)
  
  ProgramController.$inject = ['$log', 'dataService', 'productService', 'EventStaticInfo', '$state'];

  function ProgramController($log, dataService, productService, EventStaticInfo, $state) {
    // INSTANTIATIONS
    $log.instantiate('Program', 'controller');
    var vm = this;

    vm.program = dataService.retrieveData('event').details.keepsake.program

     vm.travelToStep = function(key) {
       var step = EventStaticInfo.filter(function(step) {
         return step.eventKey === key
       })[0];
       dataService.setData(['eventStep', 'stepIndex'], [step, (step.step - 1).toString()])
       $state.go('app.departed-tab.forms', {tracker: 'program'});
     }
  }

})();