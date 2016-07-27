(function() { 
  angular
    .module('Directives')
    .directive('product', product);

  function product() {
    return {
      templateUrl: 'core/directives/product/product.directive.html',
      scope: {
        data: '=data'
      },
      replace: true
    };
  }

})();