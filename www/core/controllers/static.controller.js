(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log'];
  function StaticController($log) {
    // INSTANTIATIONS
    $log.controller("Static");
    var vm = this;
  
  }
    
})();