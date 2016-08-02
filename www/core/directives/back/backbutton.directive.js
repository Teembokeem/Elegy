(function() { 
  angular
    .module('Directives')
    .directive('backbutton', backbutton);

  backbutton.$inject = ['$window' ];

  function backbutton( $window ) {
    return {
      templateUrl: 'core/directives/back/backbutton.directive.html',
      scope: {
        data: '='
      },
      replace: true,
      link: function(scope, element, attrs) {
          element.on('click', function() {
              $window.history.back();
          });
      }
    };
  }

})();

