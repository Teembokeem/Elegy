(function() {
  'use strict'

  // TODO:
    // 1. 

  angular
    .module('Controllers')
    .controller('Forms.controller', FormsController);
  
  FormsController.$inject = ['$log', '$stateParams', 'dataService'];

  function FormsController($log, $stateParams, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Forms', 'Controller');
    var vm = this;
    vm.formType = $stateParams.tracker;
    vm.newMember = null;
    vm.newOfficiant = null;
    vm.editingOfficiant = false;

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
          vm.program[formPart].push(data);
          vm.newMember = null;          
          break;
        case 'bearers':
        $log.info("doing it 2")
          vm.program[formPart].push(data);
          vm.newBearer = null;          
          break;
        case 'officiant':  
        $log.info("doing it 3")
          vm.editingOfficiant = true;
          vm.program.officiant = data;
          vm.newOfficiant = null;
          $log.info(vm.program)
      }
    }

    // HELPERS
  }

})();