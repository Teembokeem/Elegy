(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('UserProfile.controller', UserProfileController);

  UserProfileController.$inject = ['$log', '$http', 'urlFactory', 'dataService', 'authService', '$state' ];
  function UserProfileController($log, $http, urlFactory, dataService, authService, $state ) {
    var vm = this;
    vm.default = true
    var userId = authService.currentUser()._id

    $http.get( urlFactory + '/users/' + userId)
      .then( function( response ) {
        vm.user = response.data.data
        console.log(vm.user)
      } )
    
    vm.logout = function() {
      authService.logOut()
      $state.go('app.login')
    }
  }
})();