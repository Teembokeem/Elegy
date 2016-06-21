(function() {
  'use strict';

  angular
    .module('Services')
    .factory('userService', userService);
  
  userService.$inject = ['$log', '$http', 'urlFactory', 'tokenService'];

  function userService($log, $http, urlFactory, tokenService) {
    $log.info('User Service loaded.');

    var service = {
      signup: signup,
      setupEvent: setupEvent,
      grabEventPackage: grabEventPackage
    }

    return service;

    function signup(data) {
      $log.info("User Service signup.")
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/users',
        data: data
      });

      return promise;
    }

    function setupEvent(data) {
      $log.info("User Service setup event.")
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/departed',
        data: data
      });

      return promise;
    }

    function grabEventPackage(data) {
      $log.info('User Service grab Event Package.')
      var promise = $http({
        method: 'GET',
        url: urlFactory + '/users/' + data
      });
    
    return promise;
    }


  }

})();