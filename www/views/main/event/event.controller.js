(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService'];

  function EventController($log, dataService) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;
    var setter = 0;


    // LOCAL VARS
    vm.testObj = [
      {
        title: "Find A Venue",
        parts: [
          {
            title: "Location",
            description: "Lorem ipsum"
          },
          {
            title: 'Price',
            description: "Hallo"
          }
        ]
      },
      {
        title: "Burial Preparations",
        parts: [
          {
            title: "Casket",
            description: "Lorem ipsum"
          },
          {
            title: 'Flowers',
            description: "Hallo"
          },
          {
            title: 'Mural',
            description: "artsy stuff"
          }
        ]
      },
      {
        title: "Invite People",
        parts: [
          {
            title: "Confirm Schedule and Program",
            description: "Lorem ipsum"
          },
          {
            title: 'Enter emails',
            description: "Hallo"
          }
        ]
      }
    ]
        vm.val = vm.testObj[setter];

    // BOUND FUNCTIONS
    vm.slideStep = function() {
      vm.val = vm.testObj[(setter ++) % 3]
    }
    // HELPERS
    
  }

})();