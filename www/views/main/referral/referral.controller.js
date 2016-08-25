(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Referral.controller', ReferralController);
  
  ReferralController.$inject = ['$log', '$ionicLoading', 'userService', 'authService', 'dataService', '$state'];

  function ReferralController($log, $ionicLoading, userService, authService, dataService, $state) {
    // INSTANTIATIONS
    $log.instantiate("Referral", 'controller');
    var vm = this;
    vm.newGuest = {
      code: '',
      email: ''
    }

    // LOCAL VARS
    vm.data = {
      text: "VERIFYING CODE"
    }

    // BOUND FUNCTIONS

    vm.validateCode = function() {
      vm.newGuest.email = vm.newGuest.email.toLowerCase()
      if (vm.newGuest.code.length === 6) {
        $ionicLoading.show({
          templateUrl: 'views/templates/loading.html'
        }).then(function() {
          userService
            .setupGuest(vm.newGuest)
            .then(function(user) {
              $log.info("user Service setupGuest done.", user);
              if (user.error) {
                $state.go('app.login');
                $log.info("YOU ALREADY EXIST")
              } else {
                 if (user.confirmed) {
                  $state.go('app.home')
                } else {
                  dataService.setData(['refCodeUser'], [user.guest])
                  $state.go('app.user-signup');

                }

              }
              setTimeout(function() {
                $ionicLoading.hide()
              }, 3000)
            })
        })

      }
    }

    // HELPERS
  }

})();