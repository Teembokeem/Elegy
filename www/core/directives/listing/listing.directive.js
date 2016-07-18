(function() { 
  angular
    .module('Directives')
    .directive('listing', listing);

  function listing() {
    return {
      templateUrl: 'core/directives/listing/listing.directive.html',
      scope: {
        data: '=data'
      },
      replace: true
    };
  }

})();