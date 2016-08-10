(function() {
  'use strict';
  // TODO:
    // 1.

  angular
    .module('Services')
    .factory('productService', productService)
  
  productService.$inject = ['$log', '$http', 'urlFactory'];

  function productService($log, $http, urlFactory) {
    $log.instantiate('Product', 'service');

    var service = {
      createProduct: createProduct,
      grabProduct: grabProduct
    };

    function createProduct(formData) {
      $log.info("Product Service createProduct method.");

      $http({
        method: 'POST',
        url: urlFactory + '/products',
        data: formData
      })
      .then(function(res) {
        $log.info("Success");
        return res
      })
      .catch(function(err) {
        $log.info("failure");
        return err
      })
    }

    function grabProduct(id) {
      $log.instantiate('Product Service Grab Product', 'method');
      return $http({
        method: 'GET',
        url: urlFactory + '/product/' + id
      })
      .then(function(res) {
        $log.info("Succcess");
        return res.data.data[0]
      })
      .catch(function(err) {
        $log.info("failure")
        return err
      })
    }

    return service;
  }

})();