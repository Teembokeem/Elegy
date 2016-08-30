(function() {
  'use strict';
  // TODO: 
    // 1. set events in arrays based on whether event is past, or upcoming. needs at least date properties on event model..??? 

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log', 'authService', 'events', 'dataService', '$state', 'eventService','blogService', '$scope', 'userService', 'errorHandlerService', '$ionicPopup', '$ionicLoading'];

  function HomeController(urlFactory, $log, authService, events, dataService, $state, eventService, blogService, $scope, userService, errorHandlerService, $ionicPopup, $ionicLoading) {
    // INSTANTIATIONS
    $log.instantiate('Home', 'controller');
    var vm = this;
    vm.media;

    // LOCAL VARS
    vm.user = authService.currentUser();
    $log.info("your resolve", events);
    vm.assets = events[0].concat(events[1]);
    $log.info("your events", vm.assets)

    // if (vm.assets.length === 0) vm.assets.push({first: 'No Upcoming Events'});
    // $log.info(vm.assets)

    // BOUND FUNCTIONS
    vm.do = function(data) {
      // $log.info('doing stuffz with this event!', data )
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
              if (data.admin) {
                dataService.setData(['admin'], [true]);  
                $state.go('app.departed-tab.index', {name: data.first })
              } else {
                $state.go('app.departed-tab.feed')
              }
            })
        })
    }

    vm.validateCode = function(code) {
      $log.info("hi doing stuff to validate code in home")
       $ionicLoading.show({
          templateUrl: 'views/templates/working.html'
        }).then(function() {
          dataService.setData(['validated'], [true]);
          var values = {
            code: code.toLowerCase(),
            email: authService.currentUser().email
          }
          $log.info("your values", values)
          userService
            .setupGuest(values)
            .then(function(done) {
              $log.info("user Service setupGuest done.", done);
              if (done.error) {
                $scope.error = errorHandlerService.parseErrorCodes(done.error)
                $log.info("your err", done.error)
                $log.info("your parsed err", $scope.error)
                vm.popup = $ionicPopup.show({
                  templateUrl: 'views/templates/homeCtrl_err.html',
                  scope: $scope
                });

                $scope.$on('sup', function(event, data) {

                  vm.popup.close();
                })
                $ionicLoading.hide();

              } else {
              eventService
                .grabEventPackage(done.guest._id)
                .then(function(events) {
                  dataService.removeData(['planningEvents', 'attendingEvents']);
                  dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
                  vm.travel(done.departed);
                $ionicLoading.hide();
                })
              }
            })
            .catch(function(err) {
              $log.info("you got errs boyee", err);
              vm.error = err;
              $ionicLoading.hide();
              $ionicLoading.show({
                templateUrl: 'views/templates/refcodeFail.html'
              }).then(function() {
                setTimeout(function(){
                  $ionicLoading.hide();
                }, 2000)
              })
            })
        })

      }

    vm.createDeparted = function() {
      dataService.setData(['beforeState'], [true])
      $state.go('app.departed-signup', {reload: true});
    }
    // HELPERS

    vm.uploadMedia = function() {
      console.log("TESTING", vm.media)

    }

    if (dataService.retrieveData('validated') != null ? dataService.retrieveData('validated') : false) {
      dataService.setData(['validated'], [false])
      console.log("moving..");
      $state.go('app.departed-tab.feed')
    }

  }

})();