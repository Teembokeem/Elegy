(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope', '$ionicModal', 'EventDataTemplates', 'EventStaticInfo', '$state', 'marketplaceService', '$stateParams'];

  function EventController($log, dataService, $scope, $ionicModal, EventDataTemplates, EventStaticInfo, $state, marketplaceService, $stateParams) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;
    var setter = 0;
    vm.EventDataTemplates = EventDataTemplates;
    vm.EventStaticInfo = EventStaticInfo;
    vm.part = {}

    // TODO: ON EVENT GRAB, USE CHOSEN INTERMENT TYPE:
    var testobj = {
      interment: {
        traditional: {
          casket: 'stuff'
        }
      }
    }
    var stateparamsStepNumber = 0;
    vm.stepNumber = stateparamsStepNumber
    vm.chosenVal = Object.keys(testobj.interment)[0]
    vm.steps = vm['EventStaticInfo'][0]['types'][vm.chosenVal]['parts']

    $log.info('Event Data Template', vm['EventStaticInfo'][0]['types'][vm.chosenVal]['parts'])
    $log.instantiate('Event Data Template', 'constants')
    $log.instantiate('Event Static Info', 'constants')

    // LOCAL VARS
    

    // BOUND FUNCTIONS
    // vm.slideStep = function(dir) {
    //   vm.val = vm.EventStaticInfo[(((dir === 'right') ? setter = (setter + 1) % vm.EventStaticInfo.length : setter = (Math.abs((setter + vm.EventStaticInfo.length - 1)) % vm.EventStaticInfo.length)))]
      
    //   var el = document.getElementsByClassName('step-container')[0];
      
    //   // vm.openModal(vm.val)
      
    //   el.classList.add("step-title-out");
    //   el.classList.remove("step-title-in");
    //   setTimeout(function() {
    //     el.classList.add("step-title-in");
    //     el.classList.remove("step-title-out");
    //   }, 1000)
    // };

    vm.displayMarketplace = function(param) {
      $log.info("Event Controller display Marketplace method")
      var listings = marketplaceService.grabMarketplaceListings(param);
      listings.then(function(listings) {
        dataService.setData(['listings'], [listings.data.data])
        $state.go('app.departed-tab.marketplace', {category: param})
      })
    };

    vm.moveTo = function( part ) {
      vm.part = part
      $state.go('app.departed-tab.event', { stage: part.step})
    }

    $stateParams.stage ? vm.val = EventStaticInfo[$stateParams.stage - 1] : true

    console.log( vm.thisStuff, "FUCKKK")



    // HELPERS
    $ionicModal.fromTemplateUrl('views/templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-right'
    })
    .then(function( modal ) {
      return vm.modal = modal;
    })
    .then(function(cool) {
      // vm.openModal(vm.val)
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