(function() {
  'use strict';

  angular
    .module('Services')
    .factory('userService', userService);
  
  userService.$inject = ['$log', '$http', 'urlFactory', 'tokenService'];

  function userService($log, $http, urlFactory, tokenService) {
    $log.info('User Service loaded.');

    var service = {
      create: create
    }

    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/users',
        data: data
      });

      return promise;
    }

  }

})();