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
      templateUrl: '/index.html',
      controller: 'Static.controller',
      controllerAs: 'Static'
    })

    // Each tab has its own nav history stack:

    .state('app.intro', {
        url: '/intro',
        templateUrl: 'views/main/intro/intro.html',
        controller: 'Intro.controller',
        controllerAs: 'Intro',
        controllerId: 'Intro'
    })
    
    .state('app.login', {
        url: '/login',
        templateUrl: 'views/main/login/login.html',
        controller: 'Login.controller',
        controllerAs: 'Login',
        controllerId: 'Login'
    })
    
    .state('app.user-signup', {
        url: '/user-signup',
        templateUrl: 'views/main/user_signup/user_signup.html',
        controller: 'UserSignup.controller',
        controllerAs: 'UserSignup',
        controllerId: 'UserSignup'
    })
    
    .state('app.departed-signup', {
        url: '/departed-signup',
        templateUrl: 'views/main/departed_signup/departed_signup.html',
        controller: 'DepartedSignup.controller',
        controllerAs: 'DepartedSignup',
        controllerId: 'DepartedSignup',
        authorized: true
    })

    .state('app.referral', {
        url: '/referral',
        templateUrl: 'views/main/referral/referral.html',
        controller: 'Referral.controller',
        controllerAs: 'Referral',
        controllerId: 'Referral'
    })
    
    .state('app.guest-signup', {
        url: '/guest-signup',
        templateUrl: 'views/main/guest_signup/guest_signup.html',
        controller: 'GuestSignup.controller',
        controllerAs: 'GuestSignup',
        controllerId: 'GuestSignup'
    })
    
    .state('app.overview', {
        url: '/overview',
        templateUrl: 'views/main/overview/overview.html',
        controller: 'Overview.controller',
        controllerAs: 'Overview',
        controllerId: 'Overview',
        authorized: true
    })
    
    .state('app.departed-tab', {
      abstract: true, 
      templateUrl: "views/main/tabs/departed_tabs.html"
    })
    
    .state('app.departed-tab.home', {
        url: '/home',
        views: {
          'home': {
             templateUrl: 'views/main/home/home.html',
            controller: 'Home.controller',
            controllerAs: 'Home',
            resolve: {
              events: function(dataService) {
                console.log("resolving dependencies")
                return dataService.getData(['planningEvents', 'attendingEvents'], ['event', 'event'])
              }
            }
          }
        },
        cache: false,
        controllerId: 'Home',
        authorized: true
    })
    
    .state('app.departed-tab.departed', {
        url: '/departed/:name',
        views: {
          'home': {
            templateUrl: 'views/main/departed/departed.html',
            controller: 'Departed.controller',
            controllerAs: 'Departed',
            resolve: {
              event: function(dataService) {
                console.log("resolving dependencies")
                return dataService.getData(['event'], ['event'])
              }
            }
          }
        },
        cache: false,
        controllerId: 'Departed',
        authorized: true
    })
    
    
    .state('app.departed-tab.event', {
        url: '/event',
        views: {
          'event': {
            templateUrl: 'views/main/event/event.html',
            controller: 'Event.controller',
            controllerAs: 'Event'
            // resolve: {
            //   event: function(dataService) {
            //   }
            // }
          }
        },
        cache: false,
        controllerId: 'Event',
        authorized: true
    })
    
    .state('app.feed', {
        url: '/feed',
        views: {
          'feed': {
            templateUrl: 'views/main/feed/feed.html',
            controller: 'Feed.controller',
            controllerAs: 'Feed'
          }
        },
        cache: false,
        controllerId: 'Feed',
        authorized: true
    })
    
    .state('app.program', {
        url: '/program',
        views: {
          'app-user': {
            templateUrl: 'views/main/program/program.html',
            controller: 'Program.controller',
            controllerAs: 'Program'
          }
        },
        controllerId: 'Program',
        authorized: true
    })
    
    .state('app.schedule', {
        url: '/schedule',
        views: {
          'app-user': {
            templateUrl: 'views/main/schedule/schedule.html',
            controller: 'Schedule.controller',
            controllerAs: 'Schedule'
          }
        },
        controllerId: 'Schedule',
        authorized: true
    })

    .state('app.vendor-signup', {
        url: '/vendor-signup',
        templateUrl: 'views/main/vendor_signup/vendor_signup.html',
        controller: 'VendorSignup.controller',
        controllerAs: 'VendorSignup',
        controllerId: 'VendorSignup',
        authorized: true
    })

    .state('app.vendor-tab', {
      abstract: true, 
      templateUrl: "views/main/tabs/vendor_tabs.html"
    })

    .state('app.vendor-tab.vendor-home', {
        url: '/vendor-home',
        views: {
          'vendor-home': {
            templateUrl: 'views/main/vendor_home/vendor_home.html',
            controller: 'VendorHome.controller',
            controllerAs: 'VendorHome'
          }
        },
        controllerId: 'VendorHome',
        authorized: true
    })
    
    
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
  };
  
})();
