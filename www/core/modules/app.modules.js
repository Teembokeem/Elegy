(function() {
  'use strict'
  
  angular
    .module('Elegy', ['ionic', 'Controllers', 'Services'])

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
    
    .run(stateChangeLogger);
    
    stateChangeLogger.$inject = ['$rootScope', '$log'];

    
    function stateChangeLogger($rootScope, $log) {
      $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        $log.debug(`State Change Detected. Traveling to ${toState.url} from ${fromState.url === "^" ? "reload" : fromState.url}. ${toState.controllerId} Controller activated`);
      })
    }

  
})();

