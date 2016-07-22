(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('EventStaticInfo', 
      
      [{
          title: "Interment",
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
                  tracker: 'burialVault'
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
        step: 2,
        description: "Step 2",
        test: "What to consider when choosing a funeral home and director. Make sure to speak with more than one funeral home and compare any associated services.",
        types: [
          {
            parts: [
              {
                title: 'Visitation',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                tracker: 'visitation'
              },
              {
                title: 'Ceremony',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Churches',
                tracker: 'church'
              }
            ]
          }
        ]
      },
      {
        title: "Service Options",
        step: 3,
        description: "Step 3",
        test: "FUCK YOUUUUUUUUUUU",
        types: [
          {
            title: "",
            description: "Compare funeral homes near you",
            test: "Browse through locally listed funeral homes.",
            category: 'BodyDonation',
            tracker: 'bodyDonation',
            parts: [
              {

              }
            ]
          }
        ],
      },
      {
        title: "Invitations",
        step: 4,
        parts: [
          {
            title: 'Invite Friends and Family',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ],
        description: "Step 2",
        test: "FUCK YOUUUUUUUUUUU"
      },
      {
        title: "Keepsake Setup",
        step: 5,
        parts: [
          {
            title: "Confirm Payment Accounts",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: "Write A Memorandum",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Plan the Day Of Program',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: "Flowers, Wreaths",
            description: "Lorem ipsum",
            test: "FUCK YOUUUUUUUUUUU"
          },
          {
            title: 'Program Assets',
            description: "Hallo",
            test: "FUCK YOUUUUUUUUUUU"
          }
        ],
        description: "Step 4",
        test: "FUCK YOUUUUUUUUUUU"
      }     
      ])

})();