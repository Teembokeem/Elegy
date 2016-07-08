(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log', 'dataService', '$http', 'urlFactory'];

  function FeedController($log, dataService, $http, urlFactory) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;

    $http({
      method: "GET", 
      url: urlFactory + "/blog/" + dataService.retrieveData(['event']).blog
    }).then( function( response ) {
      console.log(response)
    }) 

    vm.clicked = true;
    vm.passive = 'feed';
    vm.share;

    // LOCAL VARS
    vm.items = [ 
      { name: "Alex",
        comment: "Something",
        likes: 50 ,
        commentCount: 20  },
      { name: "Time",
        comment: "Something",
        likes: 6 ,
        commentCount: 21  },
      { name: "Poop",
      comment: "Something",
      likes: 7 ,
      commentCount: 22  },
      { name: "Greg",
      comment: "Something",
      likes: 8 ,
      commentCount: 23  },
      { name: "Blarg",
      comment: "Something",
      likes: 9 ,
      commentCount: 24  },
      { name: "GAH",
      comment: "Something",
      likes: 5 ,
      commentCount: 25  }]
    // BOUND FUNCTIONS

    // HELPERS

    function uploadFiles(){
  }
  }
})();