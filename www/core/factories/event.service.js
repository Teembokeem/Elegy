(function() {
  'use strict';

  angular
    .module('Services')
    .factory('eventService', eventService)
  
  eventService.$inject = ['$log','$q', '$window'];

  function eventService($log, $q, $window) {
    $log.instantiate('Event', 'service');

    function transform(input) {
      var deferred = $q.defer();

      if (input) {
        deferred.resolve(process(input))
      } else {
        deferred.reject("transform went wrong :(")
      }

      return deferred.promise;
    }

    // helpers
    function process(data) {
      var tempArr = parse(retrieve(data));
       if (data === 'planningEvents') {
         tempArr.forEach(function(obj) {
           obj.admin = true;
         })
       } 
      return tempArr;
    }
    
    function retrieve(data) {
      return $window.localStorage.getItem(data)
    };

    function parse(data) {
      return JSON.parse(data);
    };

    return transform
  }

})();