(function() {
  'use strict';

  angular
    .module('Services')
    .factory('userService', userService);
  
  userService.$inject = ['$log', '$http', 'urlFactory', 'dataService'];

  function userService($log, $http, urlFactory, dataService) {
    $log.instantiate('User', 'service');

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
      $http({
        method: 'GET',
        url: urlFactory + '/users/' + data
      })
      .then(function(res) {
        $log.info('User Service grabEventPackage method success.');
        dataService.setData(['planningEvents', 'attendingEvents'], [res.data.user.planningEvents, res.data.user.attendingEvents]);
        return res.data.user;
      })
    
    }


  }

})();