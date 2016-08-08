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
              user.status = '0'
              newArr.push(user)
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

  $ionicPlatform.ready(function(){
      $log.info("initializing cordova contacts...")
        $cordovaContacts.find({})
          .then(function(allContacts){
              // Do yo thang with all the contacts!
              console.log("hi inside ready cordova contacts", allContacts)
              vm.all = allContacts.filter(function(contact) {
                return contact.emails != null || undefined
              })
              console.log(vm.all)
          });
   });


    // BOUND FUNCTIONS

    // HELPERS

    vm.expandShare = function() {
      vm.expanded = true;
    }
  }
})();