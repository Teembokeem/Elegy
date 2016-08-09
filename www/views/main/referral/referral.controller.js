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
      if (vm.newGuest.code.length === 6) {
        $ionicLoading.show({
          templateUrl: 'views/templates/loading.html'
        }).then(function() {

          userService
            .setupGuest(vm.newGuest)
            .then(function(done) {
              $log.info("user Service setupGuest done.", done);
              dataService.setData(['refCodeUser'], [done])
              $state.go('app.user-signup');
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