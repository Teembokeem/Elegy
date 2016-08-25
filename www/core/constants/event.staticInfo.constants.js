(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('EventStaticInfo', 
      
      [{
          title: "Interment",
          eventKey: 'interment',
          step: 1,
          test: "Step 1",
          description: "A funeral interment is the burial of the person who has died. In many cultures, two major options are offered - a traditional burial (or interred) or cremation. Interment if the first step as a way of celebrating the life of the person who has died, and gives the mourners an opportunity to say good bye and to pay their respects. Very often people share their memories and so it becomes a way of showing solidarity and support to those closest to the deceased person. There is a lot of tradition associated with funerals depending on the culture and religion of the person who has died. The rituals can often be a comfort for the bereaved as they mark the occasion properly.",
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
            { type: 'Cremation',
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
            {type:'Graveside',
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
            {type: 'Body Donation',
              parts: [
                {
                  title: "Donation Location",
                  description: "Compare funeral homes near you",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Venue',
                  type: 'donation',
                  marketplace: 'Donation Centers',
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
        description: "Also referred to as a Mortuary, choosing the correct funeral home for you can play a large role in dealing with your loss. Funeral homes are most often selected because they are close to home, has served a family in the past or has been recommended by someone trusted. But remember that limiting your search in funeral homes may not only limit the services or goods offered but also cause you to pay much more than is necessary. After locating a funeral home here, it's a good idea to visit it in person as they are required by law to provide you with a general price list (GPL) itemizing the cost of the items and services they offer. Many of which you can purchase individually through our marketplace.",
        test: "What to consider when choosing a funeral home and director. Make sure to speak with more than one funeral home and compare any associated services.",
        types: [
          {
            parts: [
              {
                title: 'Find a Funeral Home',
                description: "Choose from a list of funeral homes in your surrounding area.",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                type: 'funeralHome',
                marketplace: 'Funeral Home',
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
        description: "Elegy offers aid in planning four of the most common aspects of a funeral. Visitation Include a viewing for friends and family to say their good byes in person. Ceremony Ceremonies come in all different methods, often time coinciding with certain religiuos beliefs. Though not always included - a ceremony is a great chance for all guests to recognize and remember who was lost. Burial Often open to the guests, as this is a very emotional moment as it can be helpful to have support. Reception Commonly held to offer food, refreshments and a time for guests to speak to each other in remembrance of who was lost.",
        types: [
          {
            parts: [
              {
                title: 'Visitation',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'visitation'
              },
              {
                title: 'Visitation Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'visitationdate'
              },
              {
                title: 'Ceremony',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
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
                category: 'Venue',
                tracker: 'burial'
              },
              {
                title: 'Burial Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'burialdate'
              },
              {
                title: 'Reception',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'reception'
              },
              {
                title: 'Reception Date',
                description: "Compare funeral homes near you",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'receptiondate'
              },
            ]
          }
        ],
      },
      {
        title: "Invitations",
        eventKey: 'inviteguests',
        step: 4,
        description: "There are many ways to cope with loss, one of the most popular methods is by sharing stories and celebrating the memory of those we lose. This is best done by including friends and family in the process.",
        types: [
          {
            parts: [
              {
                title: 'Contact Upload',
                description: "Notify friends and family of your loss and invite them to share in building a lasting keepsake.",
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
        description: "Part of Elegy's service is to help you create a memorable keepsake. The steps in this section are not necessarily required for the funeral, but aid in building a lasting memory. Elegy also offers certain tools to make the process easier. Including personal donations, bereavement gifts, a digital program and online funeral marketplace.",
        types: [
          {
            parts: [
              {
                title: "Link Braintree",
                description: "Lorem ipsum",
                tracker: 'paypal'
              },
              {
                title: "Write Eulogy",
                description: "Lorem ipsum",
                tracker: 'eulogy'
              },
              {
                title: 'Make Program',
                description: "Hallo",
                tracker: 'program'
              },
              {
                title: "Order Flowers",
                description: "Lorem ipsum",
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