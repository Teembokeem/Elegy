(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope', '$ionicModal', 'EventDataTemplates', 'EventStaticInfo'];

  function EventController($log, dataService, $scope, $ionicModal, EventDataTemplates, EventStaticInfo) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;
    var setter = 0;
    vm.EventDataTemplates = EventDataTemplates;
    $log.instantiate('Event Data Template', 'constants')
    vm.EventStaticInfo = EventStaticInfo;
    $log.instantiate('Event Static Info', 'constants')
    $log.info('stuff', EventStaticInfo)

    // LOCAL VARS
        vm.val = vm.EventStaticInfo[setter];

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