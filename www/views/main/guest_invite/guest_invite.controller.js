(function() {
  'use strict';
  // TODO:

  angular
    .module('Controllers')
    .controller('GuestInvite.controller', GuestInviteController);
  
  GuestInviteController.$inject = ['$log', 'dataService', '$http', 'urlFactory', '$cordovaContacts', '$scope', '$ionicPlatform', 'userService', 'eventService', '$state'];

  function GuestInviteController($log, dataService, $http, urlFactory, $cordovaContacts, $scope, $ionicPlatform, userService, eventService, $state) {
    // INSTANTIATIONS
    $log.instantiate('Feed', 'controller');
    var vm = this;
    var departed = dataService.retrieveData('departed');
    var event = dataService.retrieveData('event');
    var eventStep = dataService.retrieveData('eventStep');
    var step = dataService.retrieveData('eventStep');
    var attendees = event.details.inviteguests.attendees;
    vm.guestList = []; 
    var existingAttendees = attendees;
    vm.all = [];

    // LOGS
    // $log.info('your attendees', attendees)
    // $log.info("guest list,", vm.guestList)
    


    vm.addPerson = function( person ) {
      var match = vm.guestList.filter(function(invitee) {
        return invitee.email === person.email
      })

      if (match.length === 0 ) {
        vm.guestList.push(person)
        console.log(vm.guestList)
      } else {
        return
      }
    }

    vm.addEmail = function() {
      console.log("touch");
      var match = existingAttendees.filter(function(attendee) {
        return attendee.email === vm.newEmail
      })

      if (match.length === 0) {
        var addedPerson = {
          first: '',
          last: '',
          email: vm.newEmail
        }
        
        // vm.guestList.unshift(addedPerson);
        vm.all.unshift({
          name: {
            givenName: '',
            familyName: ''
          },
          emails: [ {value: vm.newEmail} ]
        })
        console.log("New Guest List", vm.guestList)
        vm.newEmail = ""

      } else {
        return;
      }

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
              newArr.concat(existingAttendees)
              if (idx === done.length - 1) {
                // $log.info("were doing this after we have both:", newArr)
                eventService
                  .updateEvent(newArr, event._id, step.eventKey, step.types[0]['parts'][0]['tracker'])
                  .then(function(done) {
                    // $log.info("success: ", done)
                    $ionicLoading.show({
                      templateUrl: 'views/templates/success.html'
                    }).then(function() {
                      setTimeout(function() {
                        $ionicLoading.hide()
                      }, 3000)
                    })
                    dataService.setData(['event'], [done])
                    $state.go('app.departed-tab.event', {step: eventStep.tracker})
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

              existingAttendees.forEach(function(attendee) {
                vm.all.forEach(function(contact, index) {
                  if (contact.emails[0].value === attendee.email) {
                    vm.all.splice(index, 1);
                  }
                })
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