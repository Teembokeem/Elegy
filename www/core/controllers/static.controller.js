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
    $scope.admin = false;
    var userId = {}
    
    $scope.$watch(function () { 
      return window.localStorage.admin
    },function(admin){
      admin ? $scope.admin = true : $scope.admin = false
      console.log("User is admin? ", $scope.logged)
      })

    function getUserInfo() {
      userId = tokenService.decode()
      console.log("HATE", userId)
      $scope.userImage = userId ? userId.image : '' 
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
      if ( token ) {
        getUserInfo()
      }
      console.log("User is logged? ", $scope.logged)
    })
  }
    
})();