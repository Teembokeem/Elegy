(function() {
  'use strict';

  angular
    .module('Services')
    .factory('userService', userService);
  
  userService.$inject = ['$log', '$http', 'urlFactory', 'dataService', '$window', 'tokenService'];

  function userService($log, $http, urlFactory, dataService, $window, tokenService) {
    $log.instantiate('User', 'service');

    var service = {
      signup: signup,
      setupEvent: setupEvent,
      setupVendor: setupVendor,
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

    function setupVendor(data) {
      $log.info("User Service Setup Vendor.")
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/vendor',
        data: data
      }).then(function(done) {
        $log.info("User service Setup Vendor success, storing vals.")
        tokenService.store(done.data.token);
        return grabEventPackage(tokenService.decode(done.data.token)._id)
      }).catch(function(err) {
        $log.info("ehoh.", err)
      })

      return promise;
    }

    function grabEventPackage(data) {
      $log.info('User Service grab Event Package.')
      return $http({
        method: 'GET',
        url: urlFactory + '/users/' + data
      })
      .then(function(res) {
        $log.info('User Service grabEventPackage method success.');
        dataService.removeData(['planningEvents', 'attendingEvents']);
        $log.info("removing items", $window.localStorage.getItem('planningEvents'))
        dataService.setData(['planningEvents', 'attendingEvents'], [res.data.user.planningEvents, res.data.user.attendingEvents]);
        return res.data.user;
      })
    
    }


  }

})();