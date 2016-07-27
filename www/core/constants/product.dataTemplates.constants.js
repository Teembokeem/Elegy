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
      ]
    }
  })

})();