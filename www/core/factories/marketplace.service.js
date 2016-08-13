(function() {
  'use strict';

  angular
    .module('Services')
    .factory('marketplaceService', marketplaceService);
  
  marketplaceService.$inject = ['$log', '$http', 'urlFactory', '$q'];

  function marketplaceService($log, $http, urlFactory, $q) {
    // TEMP
    var testObj = [
      {
        venueName: "Fernwood Memorial Site",
        address: "301 Tennessee Valley Road Mill Valley, CA 94941",
        categories: ['funeral home', 'cemetery', 'reception'],
        image: '../../img/funeral1.jpg',
        rating: 4,
        reviews: [
          {
            user: "Jim",
            rating: 3,
            review: `fdasfdsafdsafdsafdsafdsaf fdsa fdas fdsa fd afdsa`
          },
          {
            user: "Ben",
            rating: 5,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          },
          {
            user: "Janice",
            rating: 4,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
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
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          },
          {
            user: "Chris",
            rating: 5,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          },
          {
            user: "Zennyatta",
            rating: 4,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
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
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          },
          {
            user: "Jerry",
            rating: 5,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          },
          {
            user: "Keith",
            rating: 4,
            review: `fdsafdsafdafasfdafdsasfasfsdafasfsda`
          }
        ]
      }
    ];


    var service = {
      grabMarketplaceListings: grabMarketplaceListings,
      parseListings: parseListings
    }

    // GET METHOD TO DATABASE
    function grabMarketplaceListings(param, extra) {
      $log.info("grab marketplace", param, extra)
      return $http({
        method: 'GET',
        url: urlFactory + '/products/' + param,
        data: {
          type: extra
        }
      })
      .then(function(listings) {
        return listings
      })
      .catch(function(err) {
        if (err) console.log("err")
      })
      // return testObj;
    }

    // BASI

    // PARSE DATA METHOD
    function parseListings(input, key) {
      console.log("hallo")
      var deferred = $q.defer();

      if (input) {
        console.log("hallo")
        deferred.resolve(process(input))
      } else {
        deferred.reject("transform went wrong :(")
      }

      return deferred.promise;
    }

    function process(input) {
      return input;
    }

    return service;
  }

})();