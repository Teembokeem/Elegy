(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log', '$state', '$ionicHistory', '$window', '$scope', 'tokenService', '$http', 'urlFactory', 'dataService'];
  function StaticController($log, $state, $ionicHistory, $window, $scope, tokenService, $http, urlFactory, dataService) {
    // INSTANTIATIONS
    $log.instantiate("Static", 'controller');
    console.log("CHECK 1")
    var vm = this;
    $scope.logged = false
    $scope.user = { image: "img/default.png"};
    $scope.admin = false;
    
    $scope.$watch(function () { 
      return window.localStorage.admin
    },function(admin){
      admin ? $scope.admin = true : $scope.admin = false
      console.log("User is admin? ", $scope.logged)
      })

    function getUserInfo() {
      var userId = tokenService.decode()
      console.log("HATE", userId)
    }
    getUserInfo()
  
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