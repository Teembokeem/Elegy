(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Home.controller', HomeController);
  
  HomeController.$inject = ['urlFactory', '$log'];

  function HomeController(urlFactory, $log) {
    // INSTANTIATIONS
    $log.controller('Home');
    var vm = this;

    // LOCAL VARS

    // BOUND FUNCTIONS

    // HELPERS
  }

})();