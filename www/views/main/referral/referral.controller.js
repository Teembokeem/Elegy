(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Referral.controller', ReferralController);
  
  ReferralController.$inject = ['$log', '$ionicLoading', 'userService', 'authService'];

  function ReferralController($log, $ionicLoading, userService, authService) {
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
              setTimeout(function() {
                $ionicLoading.hide()
                $ionicLoading.show({
                  templateUrl: 'views/templates/done.html'
                })
              }, 3000)
            })
        })

      }
    }

    // HELPERS
  }

})();