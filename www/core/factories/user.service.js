(function() {
  'use strict';

  angular
    .module('Services')
    .factory('userService', userService);
  
  userService.$inject = ['$log', '$http', 'urlFactory', 'dataService', '$window', 'tokenService', 'uploadService'];

  function userService($log, $http, urlFactory, dataService, $window, tokenService, uploadService) {
    $log.instantiate('User', 'service');

    var service = {
      signup: signup,
      setupEvent: setupEvent,
      setupVendor: setupVendor,
      setupGuest: setupGuest
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

    function setupEvent(data, img) {
      $log.info("User Service setup event.")
      return $http({
        method: 'POST',
        url: urlFactory + '/departed',
        data: data
      })
      // .then(function(done){
      //   return uploadService.uploadFile(img, "/departed/" + done.data.data, "departed")
      // });

    }

    function setupVendor(data) {
      $log.info("User Service Setup Vendor.")
      var promise = $http({
        method: 'POST',
        url: urlFactory + '/vendor',
        data: data
      }).then(function(res) {
        $log.info("User service Setup Vendor success, storing vals.")
        tokenService.store(res.data.token);
      }).catch(function(err) {
        $log.info("ehoh.", err)
      })

      return promise;
    }

    function setupGuest(data) {
      $log.info("User Service Setup Guest.")
      var promise = $http({
        method: 'GET',
        url: urlFactory + '/departed',
        params: {
          code: data.code,
          email: data.email
        }
      }).then(function(res) {
        $log.info("yo res", res);
      }).catch(function(err) {
        $log.info("errrrrr", err)
      })

      return promise;
    }


  }

})();