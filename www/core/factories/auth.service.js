(function() {
  'use strict'

  angular
    .module('Services')
    .factory('authService', authService);
  
  authService.$inject = ['tokenService', '$log', '$http'];

  function authService(tokenService, $log, $http) {
    $log.info('Token Service loaded.');

    var service = {
      logIn: logIn,
      isLoggedIn: isLoggedIn,
      logOut: logOut,
      currentUser: currentUser,
      refreshToken: refreshToken
    };

    return service;

    function logIn() {
      
    }

    function isLoggedIn() {

    }

    function logOut() {

    }

    function currentUser() {

    }

    function refreshToken() {

    }
  }
  
})();