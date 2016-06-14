(function() {
  'use strict'
    
  angular
    .module('Elegy')
    .config(routesProvider);

  function routesProvider($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'views/menu_bar/tabs.html',
      controller: 'Static.controller',
      controllerAs: 'Static'
    })

    // Each tab has its own nav history stack:

    .state('app.intro', {
        url: '/intro',
        views: {
          'app-user': {
            templateUrl: 'views/main/intro/intro.html',
            controller: 'Intro.controller',
            controllerAs: 'Intro'
          }
        }
    })
    
    .state('app.login', {
        url: '/login',
        views: {
          'app-user': {
            templateUrl: 'views/main/login/login.html',
            controller: 'Login.controller',
            controllerAs: 'Login'
          }
        }
    })
    
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
  };
  
})();
