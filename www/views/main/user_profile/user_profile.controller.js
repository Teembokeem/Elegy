(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('UserProfile.controller', UserProfileController);

  UserProfileController.$inject = ['$log', '$http', 'urlFactory', 'dataService', 'authService', '$state', 'userService', 'uploadService' ];
  function UserProfileController($log, $http, urlFactory, dataService, authService, $state, userService, uploadService ) {
    var vm = this;
    vm.default = true
    var userId = authService.currentUser()._id

    $http.get( urlFactory + '/users/' + userId)
      .then( function( response ) {
        vm.user = response.data.data
        console.log(vm.user)
      } )

    vm.changeUser = function() {
      console.log("Updating the user ?", vm.user);
      if (vm.user.newImage) {
        uploadService
          .uploadFile(vm.user.newImage, null, 'user')
          .then(function(photoUrl) {
            vm.user.image = photoUrl
            userService.updateUser( vm.user )
              .then( function( response ) {
                vm.user = response.data.data
              })
          })

      }
    }

    vm.logout = function() {
      authService.logOut()
      $state.go('app.login')
    }

  }
})();