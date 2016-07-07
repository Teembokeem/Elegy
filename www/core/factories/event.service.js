(function() {
  'use strict';

  angular
    .module('Services')
    .factory('eventService', eventService)
  
  eventService.$inject = ['$log','$q', '$window'];

  function eventService($log, $q, $window) {
    $log.instantiate('Event', 'service');

    function transform(input, key) {
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

    return transform
  }

})();