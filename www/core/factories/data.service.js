(function() {
'use strict';
// TODO:
  // 1. do event service

  angular
    .module('Services')
    .factory('dataService', dataService);

    var data = {}

  dataService.$inject = ['$log'];

  function dataService($log) {
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

    function setData(keys, values) {
      values.forEach(function(value, idx) {
        localStorage.setItem(keys[idx], JSON.stringify(value))
      })
    }

    // HELPERS
      // getData STACK
      var options = {
        // event: eventService
      }

      function applyOptions(events) {
        
      }

    return service;
  }
})();