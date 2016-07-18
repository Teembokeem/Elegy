(function() { 
  angular
    .module('Directives')
    .directive('marketplace', marketplace);

  
  function marketplace() {
    return {
      templateUrl: 'core/directives/marketplace/marketplace.directive.html',
      scope: {
        data: '='
      }
    };
  }

})();

