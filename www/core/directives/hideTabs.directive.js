(function() {
  'use strict';

  angular
    .module('Directives')
    .directive('hideTabs', hideTabs);
  
  hideTabs.$inject = ['$rootScope'];

  function hideTabs($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, el, attributes) {
        scope.$watch(attributes.hideTabs, function(value) {
          $rootScope.hideTabs = value
        });

        scope.$on('$destroy', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  }

})();