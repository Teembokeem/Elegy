(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope'];

  function EventController($log, dataService, $scope) {
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
      var el = document.getElementsByClassName('step-container')[0];
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        // el.offsetWidth = el.offsetWidth;
  
  // -> and re-adding the class
        el.classList.add("step-title-out");
        el.classList.remove("step-title-in");
       setTimeout(function() {
         el.classList.add("step-title-in");
         el.classList.remove("step-title-out");
       }, 1000)
    }
    // HELPERS
    
  }

})();