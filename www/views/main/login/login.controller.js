(function() {
  'use strict'
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Login.controller', LoginController);

  LoginController.$inject = ['$log', 'authService', '$state', 'eventService', '$ionicPopup', '$ionicHistory', 'dataService', 'vendorService', '$ionicModal', '$scope', 'tokenService'];
  
  function LoginController($log, authService, $state, eventService, $ionicPopup, $ionicHistory, dataService, vendorService, $ionicModal, $scope, tokenService) {
    // INSTANTIATIONS
    $log.instantiate('Login', 'controller')
    var vm = this;
    
    // LOCAL VARS
    vm.credentials = {
      email: tokenService.decode() ? tokenService.decode().email : 'elegy@gmail.com',
      password: ''
    };
    
    vm.trying = false
    vm.forgot = false

    // BOUND FUNCTIONS
    vm.authenticate = function() {
      vm.credentials.email = vm.credentials.email.toLowerCase();
      $log.info("Sending vendor credentials. ", vm.credentials);
      authService.queryVendor(vm.credentials)
        .then(function(res) {
          // $log.info("we back in here", res);
          if (res.data.query) {
            authService
              .logIn(vm.credentials)
              .then(function(decodedToken) {
                // $log.info("Credentials approved, ", decodedToken);
                return vendorService.grabVendorData(decodedToken._id)
              })
              .then(function(vendorData) {
                // $log.info("vendor data", vendorData)
                dataService.setData(['vendor', 'vendorProducts'], [vendorData.vendor, vendorData.vendor.products]);
                return vendorService.grabVendorOrders(vendorData.vendor._id)
              })
              .then(function(vendorOrders) {
                // $log.info("vendor orders received", vendorOrders);
                dataService.setData(['vendorOrders'], [vendorOrders]);
                $state.go('app.vendor-tab.vendor-home')
              })
          } else {
            authService
              .logIn(vm.credentials)
              .then(function(decodedToken) {
                if (decodedToken.data) {
                  vm.error = decodedToken.data.error
                  throw decodedToken
                } else {
                  return eventService.grabEventPackage(decodedToken._id)

                }
              })
              .then(function(events) {
                // $log.info("event package?!?!?!!?!", events)
                dataService.removeData(['planningEvents', 'attendingEvents']);
                dataService.setData(['planningEvents', 'attendingEvents'], [events.planningEvents, events.attendingEvents]);
              
                $state.go('app.home');
              })
                
          }
        })
        .catch(function(err) {
          $log.info("error in authenticate vendor method", err);
          vm.error = ""
        })
    };

    if (dataService.retrieveData('elegy_token') != null) {
      var data = dataService.retrieveData('elegy_token')
      $ionicHistory.clearHistory()
      $ionicHistory.clearCache()
      dataService.setData(['elegy_token'], [data])

    } else {

    }
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

    $ionicModal.fromTemplateUrl('views/templates/terms.html', {
      scope: $scope,
      animation: 'slide-in-right'
    })
    .then(function( modal ) {
      vm.modal = modal;
    })

    vm.openTerms = function() {
      vm.modal.show();
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