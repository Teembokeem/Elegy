(function() {
  'use strict'
  
  angular
    .module('Elegy', ['ionic', 'Controllers', 'Services', 'Configs', 'Directives'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })
    
    .run(authorizeRoutes);

    
    authorizeRoutes.$inject = ['$rootScope', '$log', 'authService', '$state'];
    function authorizeRoutes($rootScope, $log, authService, $state) {
      $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        $log.debug('State Change Detected.');
        
        if (toState.authorized && !authService.isLoggedIn()) {
          $log.debug(`Attempted to go to ${toState.url} but no user credentials found.`);
          $state.go('app.login');
          event.preventDefault;
        } else {
          $log.debug(`Traveling to ${toState.url} from ${fromState.url === "^" ? "reload" : fromState.url}. ${toState.controllerId} Controller to be loaded.`);
        }      
      })
    }

  
})();

