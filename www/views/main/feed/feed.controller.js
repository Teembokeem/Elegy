(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('Feed.controller', FeedController);
  
  FeedController.$inject = ['$log'];

  function FeedController($log) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;

    console.log("FUCK YOU")

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
  }

})();