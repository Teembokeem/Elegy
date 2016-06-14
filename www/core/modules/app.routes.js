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
        },
        controllerId: 'Intro'
    })
    
    .state('app.login', {
        url: '/login',
        views: {
          'app-user': {
            templateUrl: 'views/main/login/login.html',
            controller: 'Login.controller',
            controllerAs: 'Login'
          }
        },
        controllerId: 'Login'
    })
    
    .state('app.user-signup', {
        url: '/user-signup',
        views: {
          'app-user': {
            templateUrl: 'views/main/user_signup/user_signup.html',
            controller: 'UserSignup.controller',
            controllerAs: 'UserSignup'
          }
        },
        controllerId: 'UserSignup'
    })
    
    .state('app.departed-signup', {
        url: '/departed-signup',
        views: {
          'app-user': {
            templateUrl: 'views/main/departed_signup/departed_signup.html',
            controller: 'DepartedSignup.controller',
            controllerAs: 'DepartedSignup'
          }
        },
        controllerId: 'DepartedSignup'
    })
    
    .state('app.overview', {
        url: '/overview',
        views: {
          'app-user': {
            templateUrl: 'views/main/overview/overview.html',
            controller: 'Overview.controller',
            controllerAs: 'Overview'
          }
        },
        controllerId: 'Overview'
    })
    
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
  };
  
})();
