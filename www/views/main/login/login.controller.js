(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService', '$state', 'eventService', '$ionicPopup', '$ionicHistory'];
  
  function LoginController($log, authService, $state, eventService, $ionicPopup, $ionicHistory) {
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
                $state.go('app.vendor-tab.vendor-home')
              })
          } else {
            // $ionicPopup.confirm({
            //   templateUrl: 'views/templates/login_vendor_query.html',
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button-dark',
            //     onTap: function(e) {
            //       // Returning a value will cause the promise to resolve with the given value.
            //       return;
            //     }
            //   }]
            // })
            // .then(function(res) {
            //   vm.vendor = !vm.vendor
            // })
            authService
              .logIn(vm.credentials)
              .then(function(decodedToken) {
                $log.info("Credentials approved, ", decodedToken);
                
                return eventService.grabEventPackage(decodedToken._id)
              })
              .then(function(events) {
                $log.info("event package?!?!?!!?!", events)
              
                $state.go('app.departed-tab.home');
              })
          }
        })
        .catch(function(err) {
          $log.info("error in authenticate vendor method", err)
        })
    };

      $ionicHistory.clearHistory()
      $ionicHistory.clearCache()
      console.log("clearing caches.")
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