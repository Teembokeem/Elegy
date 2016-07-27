(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log', '$state', '$ionicHistory', '$window'];
  function StaticController($log, $state, $ionicHistory, $window) {
    // INSTANTIATIONS
    $log.instantiate("Static", 'controller');
    console.log("CHECK 1")
    var vm = this;
  
    vm.logOut = function() {
      $state.go('app.login');
      $ionicHistory.clearHistory()
      $ionicHistory.clearCache()
      $window.localStorage.clear()
      console.log("clearing caches.")
    }
    console.log("CHECK 2")
  }
    
})();