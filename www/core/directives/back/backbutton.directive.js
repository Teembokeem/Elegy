(function() { 
  angular
    .module('Directives')
    .directive('backbutton', backbutton);

  backbutton.$inject = ['$ionicHistory' ];

  function backbutton( $ionicHistory ) {
    return {
      templateUrl: 'core/directives/back/backbutton.directive.html',
      scope: {
        data: '='
      },
      replace: true,
      link: function(scope, element, attrs) {
          element.on('click', function() {
              $ionicHistory.goBack()
          });
      }
    };
  }

})();

