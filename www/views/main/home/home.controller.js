(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..??? 

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService', 'events', 'dataService', '$state', 'eventService','blogService'];

  function HomeController(urlFactory, $log, authService, events, dataService, $state, eventService, blogService) {
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
      $log.info("your evenfdsafdasfdsafasfsdat", data);
      blogService
        .grabBlog(data.blog)
        .then(function(done) {
          dataService.setData(['blog', 'departed'], [done.data, data]);
          console.log("THIS IS THE BLOG ", done.data)
          eventService
            .retrieveEvent(data.event)
            .then(function(retrievedData) {
              dataService.setData(['event'], [retrievedData]);
              $state.go('app.departed-tab.index', {name: data.first })
            })
        })
    }

    vm.createDeparted = function() {
      dataService.setData(['beforeState'], [true])
      $state.go('app.departed-signup');
    }
    // HELPERS

    vm.uploadMedia = function() {
      console.log("TESTING", vm.media)

    }

  }

})();