(function() {
  'use strict';
  // TODO:
  
  angular
    .module('Controllers')
    .controller('Intro.controller', IntroController);
  
  IntroController.$inject = ['$log'];
  
  function IntroController($log) {
    // INSTANTIATIONS
    $log.info('> Intro Controller loaded. <');
    var vm = this;
    
    // LOCAL VARS
    
    // BOUND FUNCTIONS
    
    // HELPERS
  }
  
})();