(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestList.controller', GuestListController);
  
  GuestListController.$inject = ['$log', 'dataService', '$http', 'urlFactory'];

  function GuestListController($log, dataService, $http, urlFactory) {
    // INSTANTIATIONS
    $log.instantiate('Guest List', 'controller');
    var vm = this;
    var event = dataService.retrieveData('event');

    vm.invitees = event.details.inviteguests.attendees;


    // LOCAL VARS



    // BOUND FUNCTIONS


    // HELPERS

  }
})();