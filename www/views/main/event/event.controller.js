(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope', '$ionicModal'];

  function EventController($log, dataService, $scope, $ionicModal) {
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
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Price',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ]
      },
      {
        title: "Major Decisions",
        parts: [
          {
            title: "State Laws",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Licensing',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Meeting with the Funeral Director',
            description: "artsy stuff",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ]
      },
      {
        title: "Keepsake Setup",
        parts: [
          {
            title: "Confirm Payment Accounts",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Add A Main Photo',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: "Write A Memorandum",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ]
      },
      {
        title: "General Preparations",
        parts: [
          {
            title: "Create A Schedule",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Plan the Day Of Program',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ]
      },
      {
        title: "Purchasables",
        parts: [
          {
            title: "Flowers, Wreaths",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Program Assets',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ]
      },
      {
        title: "Invitations",
        parts: [
          {
            title: "Review Profile & items",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Invite Friends and Family',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
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


    $ionicModal.fromTemplateUrl('views/templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    })
    .then(function( modal ) {
      vm.modal = modal;
    });

    vm.openModal = function(input) {
      $scope.modal = input
      vm.modal.show(input);
      console.log(input)
    };

    $scope.closeModal = function() {
      vm.modal.hide();
    };
    
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      vm.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    
  }

})();