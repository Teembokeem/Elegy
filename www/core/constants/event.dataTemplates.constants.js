(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('EventDataTemplates', {
    
        interment: {
            traditional: {
                Casket: {
                    item: {}
                },
                BurialVault: {
                    item: {},
                },
                Marker: {
                    item: {}
                }

            },
            cremation: {
                Urn: {
                    item: {}
                },
            },
            graveside: {
                something: {}
            },
            bodyDonation: {
                Donation: {
                    item: {}
                }
            }
        },
    funeralHome: {
        Venue: {
            item: {}
        }    
    },
    options: {

    },
    inviteGuests: {

    },
    keepSake: {

    }
    
  })

})();