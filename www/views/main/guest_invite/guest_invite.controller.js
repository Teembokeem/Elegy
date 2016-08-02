(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestInvite.controller', GuestInviteController);
  
  GuestInviteController.$inject = ['$log', 'dataService', '$http', 'urlFactory', '$cordovaContacts', '$scope', '$ionicPlatform'];

  function GuestInviteController($log, dataService, $http, urlFactory, $cordovaContacts, $scope, $ionicPlatform) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    vm.guestList = []


    vm.addPerson = function( email ) {
      vm.guestList.push(email)
      console.log(vm.guestList)
    }

    vm.addEmail = function() {
      console.log("touch")
      vm.guestList.unshift(vm.newEmail)
      console.log("New Guest List", vm.guestList)
      vm.newEmail = ""
    }

    vm.sendInvitations = function() {
      console.log("Final Guest List", vm.guestList)
    }

    

    if (ionic.Platform.isAndroid()) {
      opts.hasPhoneNumber = true;
    } 

  $ionicPlatform.ready(function(){
      $cordovaContacts.find({})
          .then(function(allContacts){
              // Do yo thang with all the contacts!
              vm.all = allContacts
              console.log(vm.all)
          });
   });

    // $scope.getContactList()

    // LOCAL VARS
    vm.all = [ 
      { firstname: "Alex",
        email: "Alex",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 50 ,
        commentCount: 20  },
      { firstname: "Time",
      email: "Alex",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 6 ,
        commentCount: 21  },
      { firstname: "Poop",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 7 ,
      commentCount: 22  },
      { firstname: "Greg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 8 ,
      commentCount: 23  },
      { firstname: "Blarg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 9 ,
      commentCount: 24  },
      { firstname: "GAH",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 5 ,
      commentCount: 25  },
      { firstname: "Greg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 8 ,
      commentCount: 23  },
      { firstname: "Blarg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 9 ,
      commentCount: 24  },
      { firstname: "GAH",
      email: "Alex",
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