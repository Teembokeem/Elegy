(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('Wepay.controller', WepayController);

  WepayController.$inject = ['$log', '$state', '$stateParams'];

  function WepayController($log, $state, $stateParams) {
    $log.instantiate("Wepay", "controller");
    var vm = this;


    $stateParams ? vm.routeParams = $stateParams : vm.routeParams = {error: 'none received'}

    $log.info("FUCKYOU")
    // activate();

    ////////////////

    // function activate() { }
  }
})();