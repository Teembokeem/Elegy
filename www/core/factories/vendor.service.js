(function() {
  'use strict';

  angular
    .module('Services')
    .factory('vendorService', vendorService);
  
  vendorService.$inject = ['$log', '$http', 'urlFactory', 'tokenService', 'uploadService', '$q'];

  function vendorService($log, $http, urlFactory, tokenService, uploadService, $q) {
    $log.instantiate('Vendor', 'Service');

    var service = {
      grabVendorOrders : grabVendorOrders,
      grabVendorData: grabVendorData,
      createProduct: createProduct,
      parseVendorItems: parseVendorItems
    }

    function grabVendorOrders(refVendor) {
      $log.info('Vendor Service Grab Vendor Orders', 'method');
      return $http({
        method: 'GET',
        url: urlFactory + '/transactions/' + refVendor
      })
      .then(function(vendorOrders) {
        $log.info("Success");
        return vendorOrders.data.data
      })
      .catch(function(err) {
        $log.info('error');
        return err;
      })
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
        $log.info("success")
        return res.data.data;
      })
      .catch(function(err) {
        $log.info("error")
        return err
      })
    }

    function createProduct(data, img) {
      $log.info("Vendor Service createProduct method")
      return $http({
        method: 'POST',
        url: urlFactory + '/products',
        data: data
      })
      .then(function(res) {
        $log.info("success");
        return uploadService.uploadFile(img, "/products/" + res.data.data, "product")
      })
      .catch(function(err) {
        $log.info("error")
        return err;
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
        $log.info("success")
        return input;
      }

    return service;
  }

})();