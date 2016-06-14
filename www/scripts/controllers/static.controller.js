(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  function StaticController($log, Chats) {
    // INSTANTIATIONS
    $log.info("> Static Controller loaded <");
    var vm = this;
  
  }
    
})();