(function() {
'use strict';

  angular
    .module('Controllers')
    .controller('UserProfile.controller', UserProfileController);

  UserProfileController.$inject = ['$log'];
  function UserProfileController($log) {
    var vm = this;
    

    vm.hello = "hello"

    ////////////////

  }
})();