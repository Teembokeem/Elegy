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
          description: `A funeral interment is the burial of the person who has died. In many cultures, two major options are offered - a traditional burial (or interred) or cremation. 
          
          Interment is the first step as a way of celebrating the life of the person who has died, and gives the mourners an opportunity to say goodbye and to pay their respects. Very often people share their memories and so it becomes a way of showing solidarity and support to those closest to the deceased person. 
          
          There is a lot of tradition associated with funerals depending on the culture and religion of the person who has died. The rituals can often be a comfort for the bereaved as they mark the occasion properly.`,
          types: [
            { 
              type: 'traditional', 
              title: 'Traditional',
              parts: [
                {
                  title: "Casket",
                  description: "The casket is what a body goes in when buried. It is often ornamental and is often filled with jewels, letters and other valuables to be buried with the body.",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Casket',
                  tracker: 'casket'
                },
                {
                  title: "Burial Vault",
                  description: "A burial vault is a lined and sealed outer receptacle that houses the casket. It protects the casket from the weight of the earth and heavy maintenance equipment that will pass over the grave.",
                  test: "Browse through locally listed funeral homes.",
                  category: 'BurialVault',
                  tracker: 'burialvault'
                },
                {
                  title: "Burial Marker",
                  description: "A headstone, or gravestone is a stele or marker, usually stone, that is placed over a grave. A tombstone is a stele or marker, usually stone, that is placed over a tomb.",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Marker',
                  tracker: 'marker'
                }
              ]
            },
            { type: 'cremation',
            title: 'Cremation',
              parts: [
                {
                  title: "Urn",
                  description: "Becoming more and more popular, cremation is one of the best and often cheaper ways to handle end of life.",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Urn',
                  tracker: 'urn'
                }
              ],  
            },
            {type:'graveside',
            title: 'Graveside',
              parts: [
                {
                  title: "Urn",
                  description: "A graveside service is a funeral service held at the gravesite at a cemetery. A graveside service can follow a traditional funeral or can be a stand-alone event. It's a type of service that can be held for either burial or interment of cremated remains.",
                  test: "Browse through locally listed funeral homes.",
                  category: 'Urn',
                  tracker: 'urn'
                }
              ]
            }, 
            {type: 'bodyDonation',
            title: 'Body Donation',
              parts: [
                {
                  title: "Donation Location",
                  description: "Body donation, anatomical donation, or body bequest is the donation of a whole body after death for research and education. Donated bodies are mostly used for medical education and research. They are used for gross anatomy, surgical anatomy, and for furthering medical education.",
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
        description: `Also referred to as a Mortuary, choosing the correct funeral home for you can play a large role in dealing with your loss. 
        
        Funeral homes are most often selected because they are close to home, have served a family in the past or have been recommended by someone trusted. But remember that limiting your search in funeral homes may not only limit the services or goods offered but also cause you to pay much more than is necessary. 
        
        After locating a funeral home here, it's a good idea to visit it in person as they are required by law to provide you with a general price list (GPL) itemizing the cost of the items and services they offer, many of which you can purchase individually through our marketplace.`,
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
        description: `Elegy offers aid in planning four of the most common aspects of a funeral. 
        
        Visitation 
        Include a viewing for friends and family to say their goodbyes in person. 
        
        Ceremony 
        Ceremonies come in all different methods, often coinciding with certain religiuos beliefs. Though not always included - a ceremony is a great chance for all guests to recognize and remember the person who was lost. 
        
        Burial 
        Often open to the guests, this is a very emotional moment as it can be helpful to have support. 
        
        Reception 
        Commonly held to offer food, refreshments and a time for guests to speak to each other in remembrance of who was lost.`,
        types: [
          {
            parts: [
              {
                title: 'Visitation',
                description: "Visitation, sometimes referred to as a Wake, that enables close friends and family to find some closure and pay their last respects in person.",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'visitation'
              },
              {
                title: 'Visitation Date',
                description: "Choose a date, time and location for the Visitation.",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'visitationdate'
              },
              {
                title: 'Ceremony',
                description: "A Funeral Ceremony, or Service, is a service held to memorialize a deceased person with their body present. A person's religion often plays a large role in what type of service is held and more specifically where.",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'ceremony'
              },
              {
                title: 'Ceremony Date',
                description: "Choose a date, time and location for the Ceremony.",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'ceremonydate'
              },
              {
                title: 'Burial',
                description: "The burial is the act of placing the remains in an underground or overground chamber. Often taking place at a cemetery, the burial is a later part of the funeral ceremony.",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'burial'
              },
              {
                title: 'Burial Date',
                description: "Choose a date, time and location for the Burial.",
                test: "Browse through locally listed funeral homes.",
                date: true,
                tracker: 'burialdate'
              },
              {
                title: 'Reception',
                description: "A reception or gathering after a funeral is a good opportunity for people to spend time together and remember the person who died. Funerals often bring people together who may not have seen each other in some time, and a reception also provides an opportunity for people to reconnect.",
                test: "Browse through locally listed funeral homes.",
                category: 'Venue',
                tracker: 'reception'
              },
              {
                title: 'Reception Date',
                description: "Choose a date, time and location for the Reception.",
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
                title: "Link Donations",
                description: "In order to make payments or receive donations, you must first link a payment method to your account.",
                tracker: 'wepay'
              },
              {
                title: "Write Eulogy",
                description: "A Eulogy is a speech of praise for whom you have lost. Write it out here and let all the Guests have a chance to read it.",
                tracker: 'eulogy'
              },
              {
                title: 'Make Program',
                description: "Fill in each section of the virtual program to keep as part of a lasting keepsake.",
                tracker: 'program'
              },
              {
                title: "Order Flowers",
                description: "Flowers are a common sign of remembrance during funerals. Use our Marketplace to order an array of sympathy and bereavement flowers.",
                category: 'Flower',
                tracker: 'flower'
              },
              {
                title: 'Find Counselor',
                description: "Dealing with loss can be hard. If you are having a tough time dealing with the passing, please use our network of grief counselors to find someone to talk to.",
                test: "FUCK YOUUUUUUUUUUU"
              }
            ]
          }
        ]
      }     
      ])

})();