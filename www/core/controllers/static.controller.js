(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log'];
  function StaticController($log) {
    // INSTANTIATIONS
    $log.instantiate("Static", 'controller');
    var vm = this;
  
  }
    
})();