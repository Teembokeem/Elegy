(function() {
  'use strict';

  angular
    .module('Constants')
    .constant('ProductDataTemplates', 
  {
    productBoiler: [
      "name", 
      "image", 
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
      casketBoiler: [
        "color", 
        "brand", 
        "dimensions",
        "weight",
        "material"
      ]
    }
  })

})();