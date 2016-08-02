(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService', '$state', 'eventService', '$ionicPopup', '$ionicHistory', 'dataService', 'vendorService'];
  
  function LoginController($log, authService, $state, eventService, $ionicPopup, $ionicHistory, dataService, vendorService) {
    // INSTANTIATIONS
    $log.instantiate('Login', 'controller')
    var vm = this;
    
    // LOCAL VARS
    vm.credentials = {
      email: 'elegy@gmail.com',
      password: 'elegy'
    };
    
    // BOUND FUNCTIONS
    vm.authenticate = function() {
      $log.info("Sending vendor credentials. ", vm.credentials);
      authService.queryVendor(vm.credentials)
        .then(function(res) {
          $log.info("we back in here", res);
          if (res.data.query) {
            authService
              .logIn(vm.credentials)
              .then(function(decodedToken) {
                $log.info("Credentials approved, ", decodedToken);
                return vendorService.grabVendorData(decodedToken._id)
              })
              .then(function(vendorData) {
                $log.info("event package?!?!?!!?!", vendorData)
                dataService.setData(['vendor', 'vendorOrders', 'vendorProducts'], [vendorData.vendor, vendorData.vendor.orders, vendorData.vendor.products]);
              
                $state.go('app.vendor-tab.vendor-home')
              })
          } else {
            authService
              .logIn(vm.credentials)
              .then(function(decodedToken) {
                $log.info("Credentials approved, ", decodedToken);
                return eventService.grabEventPackage(decodedToken._id)
              })
              .then(function(events) {
                $log.info("event package?!?!?!!?!", events)
                dataService.removeData(['planningEvents', 'attendingEvents']);
                dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
              
                $state.go('app.home');
              })
          }
        })
        .catch(function(err) {
          $log.info("error in authenticate vendor method", err)
        })
    };

      $ionicHistory.clearHistory()
      $ionicHistory.clearCache()
      // console.log("clearing caches.")
    // vm.authenticate = function() {
    //   $log.info("Sending Credentials, ", vm.credentials);
      
    //   authService.logIn(vm.credentials)
    //     .then(function(decodedToken) {
    //       $log.info("Credentials approved, ", decodedToken);
          
    //       return eventService.grabEventPackage(decodedToken._id)
    //     })
    //     .then(function(events) {
    //       $log.info("event package?!?!?!!?!", events)
        
    //       $state.go('app.departed-tab.home');
    //     })
    //     .catch(function(err) {
    //       $log.info("errrrrr", err)
    //     })
    // }
    
    // HELPERS
  }
  
})();