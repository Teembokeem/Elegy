(function() { 
  angular
    .module('Directives', [ ] )
    .directive('marketplaceCasket', marketplaceCasket);

  function marketplaceCasket() {
    return {
      templateUrl: 'core/directives/marketplaceCasket/marketplaceCasket.html',
      replace: true
    };
  }

})();