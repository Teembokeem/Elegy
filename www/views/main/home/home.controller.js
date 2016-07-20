(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..??? 

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService', 'events', 'dataService', '$state', 'eventService'];

  function HomeController(urlFactory, $log, authService, events, dataService, $state, eventService) {
    // INSTANTIATIONS
    $log.instantiate('Home', 'controller');
    var vm = this;
    vm.media;

    // LOCAL VARS
    vm.user = authService.currentUser();
    $log.info("your resolve", events)
    vm.assets = events[0].concat(events[1]);
    $log.info(vm.assets)

    // BOUND FUNCTIONS
    vm.do = function(data) {
      $log.info('doing stuffz with this event!', data )
    }
    
    vm.travel = function(data) {
      $log.info("your evenfdsafdasfdsafasfsdat", data)
      var apiEvent = eventService.retrieveEvent(data.event)
      dataService.setData(['event'], [apiEvent]);
      $state.go('app.departed-tab.departed', {name: data.first })
    }

    vm.createDeparted = function() {
      $state.go('app.departed-signup');
    }
    // HELPERS

    vm.uploadMedia = function() {
      console.log("TESTING", vm.media)

    }

  }

})();