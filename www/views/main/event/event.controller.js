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
        title: "Major Decisions",
        parts: [
          {
            title: "State Laws",
            description: "Lorem ipsum"
          },
          {
            title: 'Licensing',
            description: "Hallo"
          },
          {
            title: 'Meeting with the Funeral Director',
            description: "artsy stuff"
          }
        ]
      },
      {
        title: "Keepsake Setup",
        parts: [
          {
            title: "Confirm Payment Accounts",
            description: "Lorem ipsum"
          },
          {
            title: 'Add A Main Photo',
            description: "Hallo"
          },
          {
            title: "Write A Memorandum",
            description: "Lorem ipsum"
          }
        ]
      },
      {
        title: "General Preparations",
        parts: [
          {
            title: "Create A Schedule",
            description: "Lorem ipsum"
          },
          {
            title: 'Plan the Day Of Program',
            description: "Hallo"
          }
        ]
      },
      {
        title: "Purchasables",
        parts: [
          {
            title: "Flowers, Wreaths",
            description: "Lorem ipsum"
          },
          {
            title: 'Program Assets',
            description: "Hallo"
          }
        ]
      },
      {
        title: "Invitations",
        parts: [
          {
            title: "Review Profile & items",
            description: "Lorem ipsum"
          },
          {
            title: 'Invite Friends and Family',
            description: "Hallo"
          }
        ]
      },

      
    ]
        vm.val = vm.testObj[setter];

    // BOUND FUNCTIONS
    vm.slideStep = function(dir) {
      
      vm.val = vm.testObj[(((dir === 'left') ? setter ++ : setter = setter + 5)) % vm.testObj.length]
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