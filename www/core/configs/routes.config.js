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
      templateUrl: 'views/templates/nav.html',
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
        controllerId: 'Login',
        resolve: {
          localClear: function($window, $log) {
            $log.info("clearing caches");
            $window.localStorage.clear();
          }
        }
    })
    
    .state('app.user-signup', {
        url: '/user-signup',
        templateUrl: 'views/main/user_signup/user_signup.html',
        controller: 'UserSignup.controller',
        controllerAs: 'UserSignup',
        controllerId: 'UserSignup'
    })
    
    .state('app.user-profile', {
        url: '/user-profile',
        // views: {
        //   'profile': {
        //     templateUrl: 'views/main/user_profile/user_profile.html',
        //     controller: 'UserProfile.controller',
        //     controllerAs: 'UserProfile',
        //   }
        // },
            templateUrl: 'views/main/user_profile/user_profile.html',
            controller: 'UserProfile.controller',
            controllerAs: 'UserProfile',
        controllerId: 'UserProfile'
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

    // .state('app.departed-tab.guest-list', {
    //     url: '/guest-list',
    //     views: {
    //       'guests': {
    //         templateUrl: 'views/main/guest_list/guest_list.html',
    //         controller: 'GuestList.controller',
    //         controllerAs: 'GuestList',
    //       }
    //     },
    //     controllerId: 'GuestList'
    // })

    .state('app.departed-tab.guest-invite', {
        url: '/guest-invite',
        views: {
          'event': {
            templateUrl: 'views/main/guest_invite/guest_invite.html',
            controller: 'GuestInvite.controller',
            controllerAs: 'GuestInvite',
            resolve: {
              refreshEvent: function(eventService, dataService, $log) {
                $log.info("resolving dependencies")
                return eventService
                  .retrieveEvent(dataService.retrieveData('event')._id)
                  .then(function(event) {
                    dataService.setData(['event'], [event]);
                    return event
                  })
                  .catch(function(err) {
                    return err;
                  })
              }
            }
          }
        },
        controllerId: 'GuestInvite'
    })
    
    .state('app.overview', {
        url: '/overview',
        templateUrl: 'views/main/overview/overview.html',
        controller: 'Overview.controller',
        controllerAs: 'Overview',
        controllerId: 'Overview',
        authorized: true
    })

    // .state('app.feed', {
    //     url: '/feed',
    //     templateUrl: 'views/main/feed/feed.html',
    //     controller: 'Feed.controller',
    //     controllerAs: 'Feed',
    //     controllerId: 'Feed'
    // })
    .state('app.home', {
        url: '/home',
        templateUrl: 'views/main/home/home.html',
        controller: 'Home.controller',
        controllerAs: 'Home',
        resolve: {
          events: function(dataService) {
            console.log("resolving dependencies")
            return dataService.parseData(['planningEvents', 'attendingEvents'], ['event', 'event'])
          }
        },
        cache: false,
        controllerId: 'Home'
        // authorized: true
    })
    
    .state('app.departed-tab.wepay', {
        url: '/wepay',
        views: {
          'event': {
            templateUrl: 'views/main/wepay/wepay.html',
            controller: 'Wepay.controller',
            controllerAs: 'Wepay',
            // resolve: {
            //   events: function(dataService) {
            //     console.log("resolving dependencies")
            //     return dataService.parseData(['planningEvents', 'attendingEvents'], ['event', 'event'])
            //   }
            // },

          }
        },
        cache: false,
        controllerId: 'Wepay',
        params: { code: null },
        // authorized: true
    })
    
    .state('app.departed-tab', {
      abstract: true, 
      templateUrl: "views/main/tabs/departed_tabs.html"
    })
    
    
    // .state('app.departed-tab.departed', {
    //     url: '/departed/:name',
    //     views: {
    //       'event': {
    //         templateUrl: 'views/main/departed/departed.html',
    //         controller: 'Departed.controller',
    //         controllerAs: 'Departed',
    //         resolve: {
    //           event: function(dataService) {
    //             console.log("resolving dependencies")

    //           }
    //         }
    //       }
    //     },
    //     cache: false,
    //     controllerId: 'Departed',
    //     authorized: true
    // })
    
    .state('app.departed-tab.event', {
        url: '/event/:step',
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
        controllerId: 'Event'
        // authorized: true
    })

    .state('app.departed-tab.index', {
        url: '/events',
        views: {
          'event': {
            templateUrl: 'views/main/event/index.html',
            controller: 'Event.controller',
            controllerAs: 'Event',
            resolve: {
              event: function(dataService) {
                return dataService.parseData(['event'], ['event'])
              }
            }
          }
        },
        cache: false,
        controllerId: 'Event'
        // authorized: true
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
            },
          }
        },
        params: { marketplace: null },
        cache: false,
        controllerId: 'Marketplace',
        authorized: true
    })
  
    .state('app.departed-tab.listing', {
        url: 'listing/:listingName',
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

    .state('app.departed-tab.transaction', {
        url: '/transaction',
        views: {
          'event': {
            templateUrl: 'views/main/transaction/transaction.html',
            controller: 'Transaction.controller',
            controllerAs: 'Transaction',
            resolve: {
              brainTree: function($log, transactionService) {
                $log.info("resolving dependencies")
                return transactionService.initializeBrainTree();
              }
            }
          } 
        },
        cache: false,
        controllerId: 'Transaction',
        authorized: true
    })

    .state('app.departed-tab.forms', {
        url: '/forms/:tracker',
        views: {
          'event': {
            templateUrl: 'views/main/forms/forms.html',
            controller: 'Forms.controller',
            controllerAs: 'Forms',
            // resolve: {
            //   brainTree: function($log, transactionService) {
            //     $log.info("resolving dependencies")
            //     return transactionService.initializeBrainTree();
            //   }
            // }
          } 
        },
        params: {
          insertion: null
        },
        cache: false,
        controllerId: 'Forms',
        authorized: true
    })


    
    .state('app.departed-tab.feed', {
        url: '/feed',
        views: {
          'feed': {
            templateUrl: 'views/main/feed/feed.html',
            controller: 'Feed.controller',
            controllerAs: 'Feed'
          }
        },
        cache: false,
        controllerId: 'Feed'
        // authorized: true
    })

    .state('app.profile', {
        url: '/profile/:id',
        views: {
          'app-user': {
            templateUrl: 'views/main/user_profile/user_profile.html',
            controller: 'UserProfile.controller',
            controllerAs: 'Profile'
          }
        },
        controllerId: 'Profile',
        authorized: true
    })
    
    .state('app.departed-tab.schedule', {
        url: '/schedule',
        views: {
          'schedule': {
            templateUrl: 'views/main/schedule/schedule.html',
            controller: 'Schedule.controller',
            controllerAs: 'Schedule'
          }
        },
        controllerId: 'Schedule',
        authorized: true
    })
    
    .state('app.departed-tab.program', {
        url: '/program',
        views: {
          'program': {
            templateUrl: 'views/main/program/program.html',
            controller: 'Program.controller',
            controllerAs: 'Program'
          }
        },
        controllerId: 'Program',
        authorized: true
    })

    .state('app.departed-tab.donate', {
        url: '/donate',
        views: {
          'donate': {
            templateUrl: 'views/main/donate/donate.html',
            controller: 'Donate.controller',
            controllerAs: 'Donate'
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
        cache: false,
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
        cache: false,
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
    $urlRouterProvider.otherwise('app/login');
  };
  
})();
