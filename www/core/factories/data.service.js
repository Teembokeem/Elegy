(function() {
'use strict';

  angular
    .module('Services')
    .factory('dataService', dataService);

    var data = {}

  dataService.$inject = ['$log', 'eventService'];

  function dataService($log, eventService) {
    console.log('Data service loaded.');

    var service = {
      getData: getData,
      setData: setData
    };

    // EXPORTED FUNCTIONS
    function getData(keys, params) {
      var retrievalArray = [];
      for (num in keys) {
        retrievalArray.push(localStorage.getItem(keys[num]))
      }
      return applyOptions(retrievalArray, options[params])
    };

    function setData(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    // HELPERS
      // getData STACK
      var options = {
        event: eventService
      }

      function applyOptions(events) {
        JSON.parse(events).forEach(function(event) {

        })
      }

    return service;
  }
})();