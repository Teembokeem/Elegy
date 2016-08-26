(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('ProductDataTemplates', 
  {
    productBoiler: [
      "name", 
      "price", 
      "stock", 
      "description", 
      "category", 
      "subCategory", 
      "id"
    ],
    productTypes: {
      casket: [
        "color", 
        "brand", 
        "dimensions",
        "weight",
        "material"
      ],
      burialVault: [
        "material", 
        "dimensions"
      ],
      marker: [
        "material",
        'brand',
        'color'
      ],
      urn: [
        'material',
        'dimensions'
      ],
      flower: [
        'brand'
      ]
    },
    venueTypes: {
      venue: 'Default to Venue',
      church: 'Church',
      cemetery: 'Cemetery',
      funeralhome: 'Funeral Home',
      donation: 'Body Donation Center'
    }
  })

})();