(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('EventStaticInfo', 
      
      [{
          title: "Interment",
          eventKey: 'interment',
          step: 1,
          description: "Step 1",
          test: "What to consider when choosing a funeral home and director. Make sure to speak with more than one funeral home and compare any associated services.",
          types: [
            { 
              type: 'traditional', 
              parts: [
                {
                  title: "Casket",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Casket',
                  tracker: 'casket'
                },
                {
                  title: "Burial Vault",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'BurialVault',
                  tracker: 'burialvault'
                },
                {
                  title: "Burial Marker",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Marker',
                  tracker: 'marker'
                }
              ]
            },
            { type: 'cremation',
              parts: [
                {
                  title: "Urn",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Urn',
                  tracker: 'urn'
                }
              ],  
            },
            {type:'graveside',
              parts: [
                {
                  title: "Urn",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Urn',
                  tracker: 'urn'
                }
              ]
            }, 
            {type: 'bodyDonation',
              parts: [
                {
                  title: "Donation Location",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'BodyDonation',
                  tracker: 'bodyDonation'
                }
              ], 
            }
          ]
      },
      {
        title: "Find Funeral Home",
        eventKey: 'funeralhome',
        step: 2,
        description: "Step 2",
        test: "What to consider when choosing a funeral home and director. Make sure to speak with more than one funeral home and compare any associated services.",
        types: [
          {
            parts: [
              {
                title: 'Pick a Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'date'
              },
              {
                title: 'Find a Funeral Home',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'FuneralHome',
                tracker: 'funeralhome'
              }
            ]
          }
        ]
      },
      {
        title: "Service Options",
        eventKey: 'options',
        step: 3,
        description: "Step 3",
        test: "FUCK YOUUUUUUUUUUU",
        types: [
          {
            parts: [
              {
                title: 'Visitation',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'visitation'
              },
              {
                title: 'Ceremony',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Churches',
                tracker: 'ceremony'
              },
              {
                title: 'Ceremony Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'ceremonydate'
              },
              {
                title: 'Burial',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'burial'
              },
              {
                title: 'Reception Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'receptiondate'
              },
              {
                title: 'Reception',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'reception'
              },
            ]
          }
        ],
      },
      {
        title: "Invitations",
        eventKey: 'inviteguests',
        step: 4,
        description: "Step 2",
        test: "FUCK YOUUUUUUUUUUU",
        types: [
          {
            parts: [
              {
                title: 'Contact Upload',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                tracker: 'attendees'
              }
            ]
          }
        ]
      },
      {
        title: "Keepsake Setup",
        eventKey: 'keepsake',
        step: 5,
        description: "Step 4",
        test: "FUCK YOUUUUUUUUUUU",
        types: [
          {
            parts: [
              {
                title: "Link Braintree",
                description: "Lorem ipsum",
                test: "FUCK YOUUUUUUUUUUU"
              },
              {
                title: "Write Eulogy",
                description: "Lorem ipsum",
                test: "FUCK YOUUUUUUUUUUU"
              },
              {
                title: 'Make Program',
                description: "Hallo",
                test: "FUCK YOUUUUUUUUUUU"
              },
              {
                title: "Order Flowers",
                description: "Lorem ipsum",
                test: "FUCK YOUUUUUUUUUUU",
                category: 'Flower',
                tracker: 'flower'
              },
              {
                title: 'Find Counselor',
                description: "Hallo",
                test: "FUCK YOUUUUUUUUUUU"
              }
            ]
          }
        ]
      }     
      ])

})();