(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestList.controller', GuestListController);
  
  GuestListController.$inject = ['$log', 'dataService', '$http', 'urlFactory'];

  function GuestListController($log, dataService, $http, urlFactory) {
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
    vm.expandEul = false;
    vm.departed = {}
    vm.departed.photo = "https://i.ytimg.com/vi/H9w1rLhn1uU/maxresdefault.jpg"
    vm.departed.eulogy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    // LOCAL VARS
    vm.items = [ 
      { name: "Alex",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 50 ,
        commentCount: 20  },
      { name: "Time",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 6 ,
        commentCount: 21  },
      { name: "Poop",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 7 ,
      commentCount: 22  },
      { name: "Greg",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 8 ,
      commentCount: 23  },
      { name: "Blarg",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 9 ,
      commentCount: 24  },
      { name: "GAH",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 5 ,
      commentCount: 25  }]
    // BOUND FUNCTIONS

    // HELPERS

    vm.expandShare = function() {
      vm.expanded = true;
    }
  }
})();