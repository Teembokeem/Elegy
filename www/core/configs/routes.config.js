(function() {
  'use strict'
    
  angular
    .module('Configs')
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
    
    .state('app.event', {
        url: '/event',
        views: {
          'app-user': {
            templateUrl: 'views/main/event/event.html',
            controller: 'Event.controller',
            controllerAs: 'Event'
          }
        },
        controllerId: 'Event'
    })
    
    .state('app.referral', {
        url: '/referral',
        views: {
          'app-user': {
            templateUrl: 'views/main/referral/referral.html',
            controller: 'Referral.controller',
            controllerAs: 'Referral'
          }
        },
        controllerId: 'Referral'
    })
    
    .state('app.guest-signup', {
        url: '/guest-signup',
        views: {
          'app-user': {
            templateUrl: 'views/main/guest_signup/guest_signup.html',
            controller: 'GuestSignup.controller',
            controllerAs: 'GuestSignup'
          }
        },
        controllerId: 'GuestSignup'
    })
    
    .state('app.feed', {
        url: '/feed',
        views: {
          'app-user': {
            templateUrl: 'views/main/feed/feed.html',
            controller: 'Feed.controller',
            controllerAs: 'Feed'
          }
        },
        controllerId: 'Feed'
    })
    
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
  };
  
})();
