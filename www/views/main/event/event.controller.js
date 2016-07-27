(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope', '$ionicModal', '$ionicPopup', 'EventDataTemplates', 'EventStaticInfo', '$state', 'marketplaceService', '$stateParams', 'eventService'];

  function EventController($log, dataService, $scope, $ionicModal, $ionicPopup, EventDataTemplates, EventStaticInfo, $state, marketplaceService, $stateParams, eventService) {
    // INSTANTIATIONS
    // $log.instantiate('Event', 'controller');
    var vm = this;
    var setter = 0;
    vm.EventDataTemplates = EventDataTemplates;
    vm.EventStaticInfo = EventStaticInfo;
    $scope.eventStaticInfo = EventStaticInfo;
    vm.eventModel = dataService.retrieveData('event');
    vm.part = {}
    vm.eventStep = dataService.retrieveData('eventStep');
    vm.stepIndex = dataService.retrieveData('stepIndex');
    vm.eventStep ? vm.eventItems = vm.eventStep['types'].filter(function(type) {
      return type.type === vm.eventModel['details'][vm.eventStep.title.toLowerCase()]['__t'].toLowerCase()
    })[0]['parts'] : null;
    
    // setCompatibility(vm.eventItems);

    // LOGS FOR DATA CONFIRMS
    $log.info("your event:", vm.eventModel)
    $log.info("did it work?", vm.eventItems)
    $log.info("did it work?", vm.trackers)
    
    // LOCAL VARS
    

    // BOUND FUNCTIONS

    vm.displayMarketplace = function(param) {
      $log.info("Event Controller display Marketplace method")
      var listings = marketplaceService.grabMarketplaceListings(param);
      listings.then(function(listings) {
        dataService.setData(['listings', 'stepItem'], [listings.data.data, param.toLowerCase()])
        $state.go('app.departed-tab.marketplace', {category: param})
      })
    };

    vm.moveTo = function( part, index ) {
      dataService.setData(['eventStep', 'stepIndex'], [part, index])
      $state.go('app.departed-tab.event', { step: part.title})
      setStepParameters(part.title);
    }

    function setStepParameters(prop) {
      if (vm.eventModel[prop]) {
      } else {

      }
    }

    vm.setupModelOptions = function(option) {
      $log.instantiate("Event controller setupModelOptions", 'Method');
      
      return eventService
              .setupModelOptions(dataService.retrieveData('event')._id, option, dataService.retrieveData('eventStep').title)
              .then(function(res) {
                $log.info("success", res)
                dataService.setData(['event'], [res]);
                vm.eventModel = dataService.retrieveData('event');
                $log.info(vm.eventModel)
              })
  }

    // HELPER

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