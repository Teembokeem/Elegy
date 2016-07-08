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
      templateUrl: 'index.html',
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
                return dataService.parseData(['planningEvents', 'attendingEvents'], ['event', 'event'])
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
                return dataService.parseData(['event'], ['event'])
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
            controllerAs: 'Event',
            resolve: {
              event: function(dataService) {

              }
            }
          }
        },
        cache: false,
        controllerId: 'Event',
        authorized: true
    })
    
    .state('app.departed-tab.marketplace', {
        url: '/marketplace/:category',
        views: {
          'event': {
            templateUrl: 'views/main/marketplace/marketplace.html',
            controller: 'Marketplace.controller',
            controllerAs: 'Marketplace',
            resolve: {
              Marketplace: function(dataService) {
                return dataService.parseData(['listings'], ['marketplace']);
              }
            }
          }
        },
        cache: false,
        controllerId: 'Marketplace',
        authorized: true
    })
  
    .state('app.departed-tab.listing', {
        url: 'listing/:venueName',
        views: {
          'event': {
            templateUrl: 'views/main/listing/listing.html',
            controller: 'Listing.controller',
            controllerAs: 'Listing',
            resolve: {
              Listing: function(dataService) {
                return dataService.parseData(['listing'], ['marketplace']);
              }
            }
          }
        },
        cache: false,
        controllerId: 'Listing',
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
          'Vendor-Dashboard': {
            templateUrl: 'views/main/vendor_home/vendor_home.html',
            controller: 'VendorHome.controller',
            controllerAs: 'VendorHome',
            resolve: {
              VendorAssets: function(dataService) {
                console.log("resolving dependencies for vendor-home.")
                return dataService.parseData(['vendor'], ['vendor']);
              }
            }
          }
        },
        controllerId: 'VendorHome',
        authorized: true
    })

    .state('app.vendor-tab.vendor-inventory', {
        url: '/vendor-inventory',
        views: {
          'Vendor-Inventory': {
            templateUrl: 'views/main/vendor_inventory/vendor_inventory.html',
            controller: 'VendorInventory.controller',
            controllerAs: 'VendorInventory',
            resolve: {
              VendorProducts: function(dataService) {
                console.log("resolving dependencies for vendor-inventory.")
                return dataService.parseData(['vendorProducts'], ['vendor']);
              }
            }
          }
        },
        controllerId: 'VendorInventory',
        authorized: true
    })

    .state('app.vendor-tab.vendor-product', {
        url: '/vendor-product/:product',
        views: {
          'Vendor-Inventory': {
            templateUrl: 'views/main/vendor_product/vendor_product.html',
            controller: 'VendorProduct.controller',
            controllerAs: 'VendorProduct',
            resolve: {
              productType: function(ProductDataTemplates, $stateParams) {
                console.log($stateParams, Object.keys(ProductDataTemplates.productTypes))
                var type = Object.keys(ProductDataTemplates.productTypes).filter(function(key) {
                return key === $stateParams.product
                })
                return ProductDataTemplates.productTypes[type]
              }
            }
          }
        },
        controllerId: 'VendorProduct',
        authorized: true
    })

    .state('app.vendor-tab.vendor-orders', {
        url: '/vendor-orders',
        views: {
          'Vendor-Orders': {
            templateUrl: 'views/main/vendor_orders/vendor_orders.html',
            controller: 'VendorOrders.controller',
            controllerAs: 'VendorOrders'
          }
        },
        controllerId: 'VendorOrders',
        authorized: true
    })

    .state('app.vendor-tab.vendor-settings', {
        url: '/vendor-settings',
        views: {
          'Vendor-Settings': {
            templateUrl: 'views/main/vendor_settings/vendor_settings.html',
            controller: 'VendorSettings.controller',
            controllerAs: 'VendorSettings'
          }
        },
        controllerId: 'VendorSettings',
        authorized: true
    })
    
    
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
  };
  
})();
