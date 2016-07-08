(function() {
  'use strict';

  angular
    .module('Services')
    .factory('vendorService', vendorService);
  
  vendorService.$inject = ['$log', '$http', 'urlFactory', 'tokenService', '$q'];

  function vendorService($log, $http, urlFactory, tokenService, $q) {
    $log.instantiate('Vendor', 'Service');

    var service = {
      grabVendorData: grabVendorData,
      parseVendorItems: parseVendorItems
    }

    function grabVendorData(data) {
      $log.info('Vendor Service grabVendorData method')
      return $http({
        method: 'GET',
        url: urlFactory + '/users/' + data,
        params: {
          vendor: "",
          "vendor.products": ""
        }
      })
      .then(function(res) {
        $log.info("success", res)
        return res.data.data;
      })
      .catch(function(err) {
        $log.info("error", err)
        return err
      })
    }

    function parseVendorItems(input, key) {
      console.log("hello", input, key)
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
        $log.info("success", input)
        return input;
      }

    return service;
  }

})();