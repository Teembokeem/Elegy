(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Intro.controller', IntroController);
  
  IntroController.$inject = ['$log'];
  
  function IntroController($log) {
    // INSTANTIATIONS
    $log.info('> Intro Controller activated. <');
    var vm = this;
    
    // LOCAL VARS
    
    // BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();