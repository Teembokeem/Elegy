(function() {
'use strict';
// TODO:
  // 1. do event service

  angular
    .module('Services')
    .factory('dataService', dataService);

    var data = {}

  dataService.$inject = ['$log', 'eventService', '$q'];

  function dataService($log, eventService, $q) {
    $log.instantiate('Data', 'service');

    var service = {
      getData: getData,
      setData: setData
    };

    // EXPORTED FUNCTIONS
    function getData(data, parameter) {
      console.log('apply options', data, parameter);
        var deferredArr = [];
        data.forEach(function(datum, idx) {
          deferredArr.push(transformer[parameter[idx]](datum))
          console.log(deferredArr)
        });
        return $q.all(deferredArr)
          .then(
            function(val) {
              console.log("success", val)
              return val
            },
            function(err) {
              console.log("fail", err)
              return err
            })
    };

    function setData(keys, values) {
      values.forEach(function(value, idx) {
        localStorage.setItem(keys[idx], JSON.stringify(value))
      })
    }

    // HELPERS
      // getData STACK
      var transformer = {
        event: eventService
      }

    return service;
  }
})();