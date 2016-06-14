(function() {
  'use strict'
  
  // TODO:
  angular
    .module('Controllers')
    .controller('Intro.controller', IntroController);
  
  IntroController.$inject = ['$log'];
  
  function IntroController($log) {
    $log.info('> Intro Controller loaded. <');
    var vm = this;
    
  }
})();