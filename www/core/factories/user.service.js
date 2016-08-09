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
      setupGuest: setupGuest,
      createGuests: createGuests,
      updateRefGuest: updateRefGuest
    }

    return service;

    function updateRefGuest(data) {
      $log.instantiate('User Service Update Ref Guest', 'Method');
      return $http({
        method: 'PUT',
        url: urlFactory + '/refGuest',
        data: data
      })
      .then(function(done) {
        $log.info('Success', done)
        return done;
      })
      .catch(function(err) {
        $log.info("err", err);
        return err;
      })
    }

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
      .then(function(done){
        $log.info("HALLO DONE", done)
        return done
      });

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
        return res.data
      }).catch(function(err) {
        $log.info("errrrrr", err)
      })

      return promise;
    }

    function createGuests(list, code) {
      $log.instantiate("User Service Create Guests", "method")
      return $http({
        method: 'PUT',
        url: urlFactory + '/users',
        data: {
          list: list,
          code: code,
        }
      })
      .then(function(done) {
        $log.info("Success, ", done)
        return done.data
      })
      .catch(function(err) {
        $log.info("error, ", err)
        return err
      })

    }


  }

})();