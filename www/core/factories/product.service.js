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
      createProduct: createProduct
    };

    function createProduct(formData) {
      $log.info("Product Service createProduct method.");

      $http({
        method: 'POST',
        url: urlFactory + '/products',
        data: formData
      })
      .then(function(res) {
        $log.info("Success", res);

      })
      .catch(function(err) {
        $log.info("failure", res);
      })
    }

    return service;
  }

})();