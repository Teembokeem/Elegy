(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Intro.controller', IntroController);
  
  IntroController.$inject = ['UrlFactory', '$log'];
  
  function IntroController(url, $log) {
    // INSTANTIATIONS
    $log.controller("Intro")
    var vm = this;
    
    // LOCAL VARS
    
    // BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();