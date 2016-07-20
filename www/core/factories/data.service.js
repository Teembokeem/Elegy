(function() {
'use strict';
// TODO:
  // 1. do event service

  angular
    .module('Services')
    .factory('dataService', dataService);

    var data = {}

  dataService.$inject = ['$log', 'eventService', 'marketplaceService', 'vendorService', '$q'];

  function dataService($log, eventService, marketplaceService, vendorService, $q) {
    $log.instantiate('Data', 'service');

    var service = {
      parseData: parseData,
      retrieveData: retrieveData,
      setData: setData,
      removeData: removeData
    };

    // EXPORTED FUNCTIONS
    function parseData(data, parameter) {
      console.log('apply options', data, parameter);
        var deferredArr = [];
        data.forEach(function(datum, idx) {
          datum = retrieveData(datum);
          deferredArr.push(transformer[parameter[idx]](datum, data[idx]))
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

    function retrieveData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    function setData(keys, values) {
      values.forEach(function(value, idx) {
        localStorage.removeItem(keys[idx])
        localStorage.setItem(keys[idx], JSON.stringify(value))
      })
    }

    function removeData(keys) {
      return keys.forEach(function(value, idx) {
        localStorage.removeItem(keys[idx])
      })
    }

    // HELPERS
      // getData STACK
      var transformer = {
        event: eventService.parseEvents,
        marketplace: marketplaceService.parseListings,
        vendor: vendorService.parseVendorItems
      }

    return service;
  }
})();