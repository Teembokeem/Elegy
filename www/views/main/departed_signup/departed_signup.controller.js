(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('DepartedSignup.controller', DepartedSignupController);
  
  DepartedSignupController.$inject = ['$log', '$state'];

  function DepartedSignupController($log, $state) {
    // INSTANTIATIONS
    $log.controller('Departed Signup');
    var vm = this;
    $log.debug("what", $state.$current)
    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();