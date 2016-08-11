(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Event.controller', EventController);
  
  EventController.$inject = ['$log', 'dataService', '$scope', '$ionicModal', '$ionicPopup', 'EventDataTemplates', 'EventStaticInfo', '$state', 'marketplaceService', '$stateParams', 'eventService', 'productService'];

  function EventController($log, dataService, $scope, $ionicModal, $ionicPopup, EventDataTemplates, EventStaticInfo, $state, marketplaceService, $stateParams, eventService, productService) {
    // INSTANTIATIONS
    $log.instantiate('Event', 'controller');
    var vm = this;
    var setter = 0;
    
    
    // LOCAL VARS
    vm.EventDataTemplates = EventDataTemplates;
    vm.EventStaticInfo = EventStaticInfo;
    vm.eventModel = dataService.retrieveData('event');
    vm.part = {}
    vm.eventStep = dataService.retrieveData('eventStep');
    vm.stepIndex = dataService.retrieveData('stepIndex');
    vm.stepCompletion = [];
    vm.showDateBool = false;
    vm.departed = dataService.retrieveData('departed');
    vm.reviewItems = false
    vm.toggleRow = false
    vm.reviewingOptions = function() {
      $log.info("hello")
      vm.reviewItems = !vm.reviewItems
    }

    // if ($state.is('app.departed-tab.index') && vm.eventModel.status != '0') {
    //   var numCompleted;
    //   var totalItems;
    //     EventStaticInfo.forEach(function(step) {
    //       if (step.types.type) {

    //       } else {
    //         step.types[0].parts.forEach(function(obj) {
    //           if (vm.eventModel['details'][step.eventKey][obj.tracker]) {
    //             numCompleted += vm.eventModel['details'][step.eventKey][obj.tracker]['status']
    //           }
    //         })
    //         totalItems = step.types[0].parts.length;
    //       }
    //       vm.stepCompletion.push([numCompleted, totalItems]);
    //     })
    //   vm.stepCompletion.push(numCompleted, totalItems);
    //   $log.info("your array!!!!", vm.stepCompletion)
    // }

    if ($state.is('app.departed-tab.event')) {
      switch(vm.eventStep.eventKey) {
        case 'interment':
          if (vm.eventModel.details.interment != undefined) {
            $log.info("this is event")
              vm.eventItems = vm.eventStep['types'].filter(function(type) {
                return type.type === vm.eventModel['details'][vm.eventStep.eventKey]['__t'].toLowerCase()
              })[0]['parts']
          } else {
            break
          }
        case 'funeralhome':
        case 'options':
        case 'inviteguests':
          vm.invitees = vm.eventModel.details.inviteguests.attendees;
          $log.info("invite guests right now.", vm.invitees)
        case 'keepsake':
          vm.eventItems = vm.eventStep['types'][0]['parts']
      }
      

    }

    // LOGS FOR DATA CONFIRMS
    // $log.info("your event:", vm.eventModel)
    // $log.info("did it work?", vm.eventItems)
    // $log.info("did it work?", vm.eventStep.title === 'Interment')
    // $log.info("did it work?", vm.eventStep['types'])
    

    // BOUND FUNCTIONS
    vm.moveTo = function( part, index ) {
      dataService.setData(['eventStep', 'stepIndex'], [part, index])
      $state.go('app.departed-tab.event', { step: part.title})
      // setStepParameters(part.title);
    }

    vm.displayMarketplace = function(param) {
      // $log.info("Event Controller display Marketplace method", param)
      var listings = marketplaceService.grabMarketplaceListings(param);
      listings.then(function(listings) {
        dataService.setData(['listings', 'stepItem'], [listings.data.data, param.toLowerCase()])
        $state.go('app.departed-tab.marketplace', {category: param})
      })
    };

    vm.processAction = function(title ,idx, id, tracker) {
      $log.info("hello", title)
      switch(title) {
        case ("Contact Upload"):
          // $log.info("title", title);
          $state.go('app.departed-tab.guest-invite');
          break;
        case ("Pick a Date"): 
        case ("Ceremony Date"): 
        case ("Burial"): 
        case ("Reception Date"): 
          // $log.info("date picker");
          vm.showDateBool = true;
          vm.showDate(idx, id);
          break;
        case ('Link Braintree'):
        case ('Write Eulogy'):
        case ('Make Program'):
        case ('Add a Location'):
          $log.info("heading to forms.")
          $state.go('app.departed-tab.forms', {tracker: tracker});
          break;
      }

    }


    function setStepParameters(prop) {
      if (vm.eventModel[prop]) {
      } else {

      }
    }

    vm.showItem = function(idx, id) {
      $log.instantiate('Event Controller Show Item', 'method');
      // $log.info("your args", idx, id)
      console.log("row being toggled :", vm.toggleRow)
      vm.toggleRow = !vm.toggleRow

      if (vm.itemBlock === idx) {
        vm.itemBlock = '';
        // localStorage.removeItem('items')

      } else {
        vm.itemBlock = idx;

        // if (dataService.retrieveData('items') != null && dataService.retrieveData('items').index !== idx) {
        //   vm.Item = dataService.retrieveData('items')
        //   $log.info("your item:", vm.Item)
        //   $log.info("hi")

        // } else {
          productService
            .grabProduct(id)
            .then(function(serviceData) {
              // $log.info("YES", serviceData)
              vm.itemBlock = idx;
              vm.Item = serviceData
              vm.Item.index = idx;
              vm.Item.method = function displayListing(data, param) {
                dataService.setData(['listing'], [data]);
                dataService.setData(['vendor'], [data.vendor]);
                $state.go('app.departed-tab.listing', {listingName: param});
              }
        //       localStorage.removeItem('items')
              dataService.setData(['items'], [vm.Item])
            })

        // }

        }
      }

    vm.showDate = function(idx, id) {
      $log.instantiate('Event Controller Show Date', 'method');
      vm.toggleRow = !vm.toggleRow
      console.log("row being toggled :", vm.toggleRow)
      if (vm.itemBlock === idx) {
        vm.itemBlock = '';
        localStorage.removeItem('items');

      } else {
          // var items = dataService.retrieveData('items')[idx]
          dataService.setData(['items'], [[vm.eventModel['details'][vm.eventStep.eventKey][vm.eventItems[idx]['tracker']]]])
          vm.Date = new Date(dataService.retrieveData('items')[0]['date'])
          vm.itemBlock = idx;
          vm.stagedDate = [[vm.eventModel['details'][vm.eventStep.eventKey][vm.eventItems['tracker']]]]
          // $log.info(vm.Date, "fdlsafdsalfsdal")
        }
    }

    vm.stageDate = function(date, idx) {
      $log.instantiate("Event Controller Stage Date", 'method');
      // $log.info("arguments: ", date);
      return eventService 
        .updateEvent(date, dataService.retrieveData('event')['_id'], dataService.retrieveData('eventStep')['eventKey'].toLowerCase(), dataService.retrieveData('eventStep')['types'][0]['parts'][idx]['tracker'], 'date')
        .then(function(response) {
          dataService.setData(['event'], [response])
          // $log.info("hello res!, ", response)
          $state.reload();
      })  
  }

    vm.setupModelOptions = function(option) {
      $log.instantiate("Event controller setupModelOptions", 'Method');
      return eventService
        .setupModelOptions(dataService.retrieveData('event')._id, option, dataService.retrieveData('eventStep').title)
        .then(function(res) {
          // $log.info("success", res)
          dataService.setData(['event'], [res]);
          vm.eventModel = dataService.retrieveData('event');
          vm.eventItems = vm.eventStep['types'].filter(function(type) {
            return type.type === vm.eventModel['details'][vm.eventStep.eventKey]['__t'].toLowerCase()
          })[0]['parts']
          // $log.info(vm.eventModel)
        })
  }

    // HELPER

    function loadProducts() {

    }

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