(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log', '$state', '$ionicHistory', '$window', '$scope'];
  function StaticController($log, $state, $ionicHistory, $window, $scope) {
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
    
    $scope.$watch(function () { 
      return window.localStorage.elegy_token
    },function(token){
      token ? $scope.logged = true : $scope.logged = false
      console.log("User is logged? ", $scope.logged)
      })
  }
    
})();