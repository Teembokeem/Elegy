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
    var attendees = event.details.inviteguests.attendees;
    vm.guestList = [];
    attendees.forEach(function(attendee) {
      vm.guestList.push(attendee.email)
    })

    $log.info("guest list,", vm.guestList)
    


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
          done.forEach(function(user, idx) {
              var obj = {
                item: user[0],
                first: user[1],
                last: user[2],
                email: user[3],
                status: "0"
              }
              newArr.push(obj)
              if (idx === done.length - 1) {
                $log.info("were doing this after we have both:", newArr)
                eventService
                  .updateEvent(newArr, event._id, step.eventKey, step.types[0]['parts'][0]['tracker'])
                  .then(function(done) {
                    $log.info("success: ", done)
                    dataService.setData(['event'], [done])
                  })
                  .catch(function(err) {
                    $log.info("ehoh error: ", err)
                  })

              }
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
      { first: "Alex",
        email: "Alex",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 50 ,
        commentCount: 20  },
      { first: "Time",
      email: "Alex",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        likes: 6 ,
        commentCount: 21  },
      { first: "Poop",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 7 ,
      commentCount: 22  },
      { first: "Greg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 8 ,
      commentCount: 23  },
      { first: "Blarg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 9 ,
      commentCount: 24  },
      { first: "GAH",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 5 ,
      commentCount: 25  },
      { first: "Greg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 8 ,
      commentCount: 23  },
      { first: "Blarg",
      email: "Alex",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      likes: 9 ,
      commentCount: 24  },
      { first: "GAH",
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