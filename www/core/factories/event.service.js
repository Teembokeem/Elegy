(function() {
  'use strict';

  angular
    .module('Services')
    .factory('eventService', eventService)
  
  eventService.$inject = ['$log','$q', '$window', '$http', 'urlFactory'];

  function eventService($log, $q, $window, $http, urlFactory) {
    $log.instantiate('Event', 'service');

    var service = {
      updateEvent: updateEvent,
      grabEventPackage: grabEventPackage,
      parseEvents: parseEvents,
    }

    function updateEvent(module) {
      $http({
        method: 'PUT',
        url: urlFactory + '/events',
        data: module
      })
      .then(function(res) {
        $log.info("yes response", res);
      })
      .catch(function(err) {
        $log.info("hey err", err)
      })
    }

    function grabEventPackage(data) {
      $log.info('User Service grab Event Package.')
      return $http({
        method: 'GET',
        url: urlFactory + '/users/' + data, 
        params: {
          planningEvents: 'planningEvents',
          attendingEvents: 'attendingEvents'
        }
      })
      .then(function(res) {
        $log.info('User Service grabEventPackage method success.');
        return res.data.data;
      })
      .catch(function(err) {
        return err;
      })
    
    }

    function parseEvents(input, key) {
      var deferred = $q.defer();

      if (input) {

        deferred.resolve(process(input, key))
      } else {
        deferred.reject("transform went wrong :(")
      }

      return deferred.promise;
    }

    // helpers
      function process(input, key) {
        if (key === 'planningEvents') {
          input.forEach(function(obj) {
            obj.admin = true;
          })
        } 
        return input;
      }

    return service
  }

})();