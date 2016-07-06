(function() {
  'use strict';

  angular
    .module('Services')
    .factory('marketplaceService', marketplaceService);
  
  marketplaceService.$inject = ['$log', '$http', 'urlFactory', 'dataService'];

  function marketplaceService($log, $http, urlFactory, dataService) {
    var service = {
      grabMarketplaceListings: grabMarketplaceListings
    }

    function grabMarketplaceListings(param) {
      // $http({
      //   method: 'GET',
      //   url: urlFactory + '/products' + param
      // })
      // .then(function(listings) {
      //   return dataService.setData(['listings'], [listings])
      // })
      dataService.setData(['listings'], [testObj])
    }

    // TEMP
    var testObj = [
      {
        venueName: "Fernwood Memorial Site",
        address: "301 Tennessee Valley Road Mill Valley, CA 94941",
        categories: ['funeral home', 'cemetery', 'reception'],
        image: '../../img/funeral1.jpeg',
        rating: 4,
        reviews: [
          {
            user: "Jim",
            rating: 3,
            review: `Line1
            line2`
          },
          {
            user: "Ben",
            rating: 5,
            review: `Line1
            line2`
          },
          {
            user: "Janice",
            rating: 4,
            review: `Line1
            line2`
          }
        ]
      },
      {
        venueName: "Graham Family Funeral Site",
        address: "73 Risdon Road New Town TAS 7008",
        categories: ['cemetery', 'chapel'],
        image: '../../img/funeral2.jpeg',
        rating: 4.3,
        reviews: [
          {
            user: "Annie",
            rating: 4,
            review: `Line1
            line2`
          },
          {
            user: "Chris",
            rating: 5,
            review: `Line1
            line2`
          },
          {
            user: "Zennyatta",
            rating: 4,
            review: `Line1
            line2`
          }
        ]
      },
      {
        venueName: "Arc Space",
        address: "Sant Joan Despí",
        categories: ['reception'],
        image: '../../img/funeral3.jpeg',
        rating: 3,
        reviews: [
          {
            user: "Yael",
            rating: 3,
            review: `Line1
            line2`
          },
          {
            user: "Jerry",
            rating: 5,
            review: `Line1
            line2`
          },
          {
            user: "Keith",
            rating: 4,
            review: `Line1
            line2`
          }
        ]
      }
    ]

    return service;
  }

})();