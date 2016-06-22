(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Referral.controller', ReferralController);
  
  ReferralController.$inject = ['$log'];

  function ReferralController($log) {
    // INSTANTIATIONS
    $log.instantiate("Referral", 'controller');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();