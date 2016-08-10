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
      retrieveEvent: retrieveEvent,
      parseEvents: parseEvents,
      setupModelOptions: setupModelOptions
    }

    function updateEvent(mod, Id, detailModule, itemPath, item) {
      $log.info("Event Service Update Event Method", mod, Id, detailModule, itemPath, item);

      return $http({
        method: 'PUT',
        url: urlFactory + '/events/' + Id,
        data: {
          detail: detailModule,
          itemPath: itemPath,
          item: item,
          asset: mod
        }
      })
      .then(function(res) {
        // $log.info("yes response", res);
        return res.data.data;
      })
      .catch(function(err) {
        // $log.info("hey err", err)
        return err;
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

    function retrieveEvent(data) {
      $log.instantiate('Event Service retrieve Event', 'Method')
      return $http({
        method: 'GET',
        url: urlFactory + '/events/' + data
      })
      .then(function(res) {
        // $log.info('success', res.data);
        return res.data.data
      })
    }

    function parseEvents(input, key) {
      var deferred = $q.defer();

      if (input) {

        deferred.resolve(process(input, key))
      } else {
        deferred.reject()
      }

      return deferred.promise;
    }

    function setupModelOptions(id, option, insertion) {
      $log.instantiate('Event Service setupModelOptions', 'Method')
      var sanitizedInsertion = insertion.toLowerCase();
      return $http({
        method: 'PUT',
        url: urlFactory + '/events/' + id,
        data: {
          option: option,
          insertion: sanitizedInsertion
        }
      })
      .then(function(res) {
        // $log.info("success", res.data);
        res.data.data.details[sanitizedInsertion] = res.data.option
        return res.data.data
      })
      .catch(function(err) {
        // $log.info("ehoh", err)
        return err
      })
    }

    // helpers
      function process(input, key) {
        // $log.info("yas plas", key)
        if (key === 'planningEvents') {
          // $log.info("yas plas", key, input)
          input.forEach(function(obj) {
            obj.admin = true;
          })
        } 
        return input;
      }

    return service
  }

})();