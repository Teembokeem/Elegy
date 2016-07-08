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
      "dateUploaded",
      "dateUpdated",  
      "id"
    ],
    productTypes: {
      caskets: [
        "color", 
        "brand", 
        "dimensions",
        "weight",
        "material"
      ]
    }
  })

})();