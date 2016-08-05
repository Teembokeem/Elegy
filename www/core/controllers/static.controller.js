(function() {
  'use strict'
  
  //TODO:
  
  angular
    .module('Controllers')
    .controller('Static.controller', StaticController)
  
  StaticController.$inject = ['$log', '$state', '$ionicHistory', '$window', '$scope', 'authService', '$http', 'urlFactory'];
  function StaticController($log, $state, $ionicHistory, $window, $scope, authService, $http, urlFactory) {
    // INSTANTIATIONS
    $log.instantiate("Static", 'controller');
    console.log("CHECK 1")
    var vm = this;
    $scope.logged = false
    $scope.user = { image: "img/default.png"}
    
    

    function getUserInfo() {
      var userId = authService.currentUser()._id
      console.log("user id ", userId)
      $http.get( urlFactory + '/users/' + userId)
      .then( function( response ) {
        $scope.user = response.data.data
        console.log("THIS IS THE USER : ", vm.user)
        $scope.logged = true
      } )
    }
  
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