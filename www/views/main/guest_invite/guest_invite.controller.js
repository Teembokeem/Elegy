(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestInvite.controller', GuestInviteController);
  
  GuestInviteController.$inject = ['$log', 'dataService', '$http', 'urlFactory', '$cordovaContacts', '$scope', '$ionicPlatform', 'userService', 'eventService'];

  function GuestInviteController($log, dataService, $http, urlFactory, $cordovaContacts, $scope, $ionicPlatform, userService, eventService) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    var departed = dataService.retrieveData('departed');
    var event = dataService.retrieveData('event');
    var step = dataService.retrieveData('eventStep');
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
      $log.instantiate("Guest Invite Controller Send Invitations", 'method')
      console.log("Final Guest List", vm.guestList)
      userService
        .createGuests(vm.guestList, departed.inviteHash)
        .then(function(done) {
          var newArr = [];
          done.forEach(function(user) {
              //  TODO: SET THIS PART UP TO PARSE AND CREATE THE OBJECT AS SEEN IN EVENT MODEL BACKEND. 
              // BUTTTTTT THIS ALSO NEEDS TO CHECK FOR IF A USER WERE TO INVITE ADDITIONAL GUESTS AT A LATER TIME, MEANING THE ARRAY IN THE BACKEND EXISTS.....
              // WHICH MEANS YOU SHOULD PROBABLY ADD IN A CHECK SOMEWHERE FOR GRABBING THAT ATTENDEES LIST, AND PUSHING IT TO THAT ARRAY. KBYE.
          })
          eventService
            .updateEvent(done, event._id, step.eventKey, step.types[0]['parts'][0]['tracker'])
            .then(function(done) {
              $log.info("success: ", done)
            })
            .catch(function(err) {
              $log.info("ehoh error: ", err)
            })
        })
    }

    

    if (ionic.Platform.isAndroid()) {
      opts.hasPhoneNumber = true;
    } 

  // $ionicPlatform.ready(function(){
  //     $cordovaContacts.find({})
  //         .then(function(allContacts){
  //             // Do yo thang with all the contacts!
  //             vm.all = allContacts
  //             console.log(vm.all)
  //         });
  //  });

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